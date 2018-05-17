import React from 'react';
import Presenter from './presenter';
import {get,post} from '../../../services/api';
import {Location} from 'expo';
import {navigateToEvent} from "../../../lib/leafNavigation";
const forEach = require('lodash/forEach');
const findIndex = require('lodash/findIndex');

export default class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listViewIsActive: false,
            awaitingServerResponse: true,
            events: null,
            error: null,
            selectedEventIndex: null,
            location: null,
            locationLoaded: false
        };
    }

    componentWillMount(){
        this.getLocation();
        this.getEvents();
    }

    render() {
        const {user} = this.props.screenProps;
        return <Presenter
            eventSelector={this.eventSelector}
            setListViewTo={this.setListViewTo}
            setAttendingTo={this.setAttendingTo}
            navigateTo={this.navigateToSelectedEvent}
            refresh={this.refresh}
            user={user}
            {...this.state}
        />
    }

    /* Controller methods - Anything that the view doesn't need to interact with */
    async getEvents(){
        //TODO: This just gets all events at the moment
        try {
            const events = await get('/events/all');
            this.setState({
                events: events,
                awaitingServerResponse: false
            });
            this.getEventImages();
        } catch (e) {
            this.setState({
                error: e,
                awaitingServerResponse: false
            });
        }
    }

    getEventImages(){
        const {events} = this.state;
        const updatedEvents = forEach(events, async (event)=>{
            const json = await get(`events/photo/${event._id}`);
            const photo = json.photo;
            const index = findIndex(this.state.events,(e) => {return e._id === event._id});
            events[index].photo = photo;
            this.setState({
                events: updatedEvents
            });
        });
    }

    async getLocation(){
        //If either of these return falsey, you might have problems on certain Android devices.
        const providerStatus = await Location.getProviderStatusAsync();
        console.log("map: locationServicesEnabled: " + providerStatus.locationServicesEnabled);
        console.log("map: gpsAvailable: " + providerStatus.gpsAvailable);

        const location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
        this.setState({
            location: location,
            locationLoaded: true,
        });
    }

    /* Interface methods - Button controllers, etc. Remember binding. */
    eventSelector = (event) => {
        const id = event ? parseInt(event.id) : null;
        this.setState({selectedEventIndex: id});
    };

    setListViewTo = (bool) => {
        this.setState({listViewIsActive: bool});
    };

    navigateToSelectedEvent = (eventID) => {
        const {mainNavigation} = this.props.screenProps;
        const {location} = this.state;
        if (eventID){
            navigateToEvent(mainNavigation,eventID,location);
        } else {
            console.log(`Invalid eventID ${eventID}`);
        }
    };

    setAttendingTo = async (eventID, bool) => {
        const options = {
            attending: bool,
            event: eventID,
            user: this.props.screenProps.user.id
        };
        try {
            const event = await post('/events/setUserAttendance',options); //send request to server, get updated event in response
            let events = this.state.events;
            events[this.state.selectedEventIndex] = event; //update relevant event
            this.setState({events: events});
        } catch (e) {
            console.log(e);
        }
    };

    refresh = () => {
        this.setState({awaitingServerResponse: true});
        this.getEvents();
    };
}