import React from 'react';
import Presenter from './presenter';
import {Location} from 'expo';
import {get,post} from './../../services/api';
import {getDistance,convertUnit} from 'geolib';
import {notImplemented,warning} from "../../lib/alerts";
const forEach = require('lodash/forEach');
const findIndex = require('lodash/findIndex');
const values = require('lodash/values');
const join = require('lodash/join');

export default class EventContainer extends React.Component {

    static navigationOptions = {
        gesturesEnabled: true
    };

    constructor(props) {
        super(props);
        this.eventID = this.props.navigation.state.params.eventID;
        this.state = {
            event: null,
            error: null,
            distance: null,
            bookmarked: null, //TODO: Update once bookmarking is implemented,
            attendees: null
        };
    }

    componentWillMount(){
        this.getEvent();
    }

    render() {
        const {user} = this.props.screenProps;
        const navigation = this.props.navigation;
        return <Presenter
            user={user}
            navigation={navigation}
            bookmark={this.bookmark}
            setAttendingTo={this.setAttendingTo}
            {...this.state}
        />
    }

    /* Controller methods - Anything that the view doesn't need to interact with */
    async getEvent(){
        try {
            const event = await get(`/events/byID/${this.eventID}`);
            this.updateEvent(event);
        } catch (e) {
            this.setState({
                error: e
            })
        }
    }

    updateEvent(event){
        this.setState({
            event: event
        });
        this.getDistance(event);
        this.getAttendees();
    }

    getAttendees = async () => {
        try {
            const promises = this.state.event.attending.map(async (a) => {
                return get(`users/${a}`);
            });
            Promise.all(promises).then((users) => {
                this.setState({
                    attendees: users
                },()=>{this.getAttendeePhotos()});
            });
        } catch (e) {
            console.log("Error retrieving users");
        }
    };

    getAttendeePhotos = async () => {
        try {
            const attendees = this.state.attendees;
            forEach(attendees, async (user) => {
                const json = await get(`users/photo/${user._id}`);
                //Photo arrives as an object with a value for each character, ie {0:d,1:a,2:t,3:a,etc...}
                const photo = join(values(json.photo),"");
                const index = findIndex(this.state.attendees, (u) => {return u._id === user._id});
                attendees[index].photo = photo;
                this.setState({
                    attendees: attendees
                });
            });
        } catch (e) {
            console.log("Error retrieving user photos");
        }
    };

    async getDistance(event){
        if (event) {
            const location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
            const userLocation = {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            };
            const eventLocation = {
                latitude: event.schedule[0].googlePlace.geometry.location.lat,
                longitude: event.schedule[0].googlePlace.geometry.location.lng
            };
            const distance = convertUnit('mi',getDistance(userLocation,eventLocation),2);
            this.setState({
                distance: distance
            });
        } else {
            return null;
        }
    }

    /* Interface methods - Button controllers, etc. Remember binding. */
    setAttendingTo = async (bool) => {
        const {user} = this.props.screenProps;
        try {
            const event = await post('events/setUserAttendance',{
                user: user.id,
                attending: bool,
                event: this.state.event._id,
            });
            this.updateEvent(event);
        } catch (e) {
            console.log(e);
            warning("There was a problem updating your attendance. Please try again later.");
        }
    };

    bookmark = (bool) => {
        notImplemented("bookmarking events");
    };
}