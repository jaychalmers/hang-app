import React from 'react';
import Presenter from './presenter';
import {Alert} from 'react-native';
import {get,post} from '../../../services/api';
import {navigateToEvent} from "../../../lib/leafNavigation";
const forEach = require('lodash/forEach');
const findIndex = require('lodash/findIndex');

export default class EventsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listViewIsActive: true,
            createdViewIsActive: false,
            awaitingAttendedEvents: true,
            attendedEvents: null,
            awaitingCreatedEvents: true,
            createdEvents: null,
            error: null
        };
    }

    componentDidMount(){
        this.getCreatedEvents();
        this.getAttendedEvents();
    }

    render() {
        const {
            user
        } = this.props.screenProps;
        return <Presenter
            navigateTo={this.navigateToSelectedEvent}
            setCreatedViewIsActiveTo={this.setCreatedViewIsActiveTo}
            changeAttendingStatus={this.changeAttendingStatus}
            refreshCreated={this.refreshCreated}
            refreshAttended={this.refreshAttended}
            deleteEvent={this.deleteEvent}
            user={user}
            {...this.state}
        />
    }

    /*Container methods. Anything that the view doesn't interact with*/
    getCreatedEvents = async () => {
        const {user} = this.props.screenProps;
        /*
        This will only be relevant once we have privacy settings implemented.
        const {user} = this.props.screenProps;
        const options = {token: user.token};
        */
        try {
            const createdEvents = await get(`/events/createdByUser/${user.id}`);
            this.setState({
                createdEvents: createdEvents,
                awaitingCreatedEvents: false
            });
            this.getPhotosForEvents('createdEvents');
        } catch (e) {
            this.setState({
                error: e,
                awaitingCreatedEvents: false
            });
        }
    };

    getAttendedEvents = async () => {
        const user = this.props.screenProps.user;
        /*
        This will only be relevant once we have privacy settings implemented.
        const {user} = this.props.screenProps;
        const options = {token: user.token};
        */
        try {
            const attendedEvents = await get(`/events/attendedByUser/${user.id}`);
            this.setState({
                attendedEvents: attendedEvents,
                awaitingAttendedEvents: false
            });
            this.getPhotosForEvents('attendedEvents');
        } catch (e) {
            this.setState({
                error: e,
                awaitingAttendedEvents: false
            });
        }
    };

    getPhotosForEvents = (category) => {
        if (category !== "createdEvents" && category !== "attendedEvents"){
            console.log("Invalid category supplied to getPhotosForEvents:" + category);
            throw new Error("Invalid category supplied to getPhotosForEvents:" + category);
        }
        const events = this.state[category];
        forEach(events, async (event) => {
            const json = await get(`events/photo/${event._id}`);
            const photo = json.photo;
            const index = findIndex(this.state[category],(e) => {return e._id === event._id});
            events[index].photo = photo;
            this.setState({
                [category]: events
            });
        });
    };

    /*Interface methods - Button controllers for the views, etc*/
    setCreatedViewIsActiveTo = (bool) => {
        if (bool) {
            this.getAttendedEvents();
        } else {
            this.getCreatedEvents();
        }
        this.setState({createdViewIsActive: bool});
    };

    changeAttendingStatus = async (eventID,bool) => {
        const options = {
            attending: bool,
            event: eventID,
            user: this.props.screenProps.user.id
        };
        try {
            const event = await post('/events/setUserAttendance',options); //send request to server, get updated event in response
            let events = this.state.attendedEvents;
            const index = findIndex(this.state.attendedEvents,(e)=>{
                return e._id === eventID;
            });
            events[index] = event; //update relevant event
            this.setState({attendedEvents: events});
        } catch (e) {
            console.log(e);
        }
    };

    deleteEvent = (eventID) => {
        Alert.alert(
            "Delete Event",
            "Are you sure you want to delete this event?",
            [
                {text: 'Cancel', onPress: () => {console.log("Delete")}},
                {text: 'Delete', onPress: () => {this.makeDeleteRequest(eventID)}}
            ],
            {cancelable: false}
        );
    };

    makeDeleteRequest = async (id) => {
        try {
            const event = await post(`/events/delete/${id}`,{});
            this.refreshCreated();
        } catch (e) {
            console.log(e);
        }
    };

    refreshCreated = () => {
        this.setState({awaitingCreatedEvents: true});
        this.getCreatedEvents();
    };

    refreshAttended = () => {
        this.setState({awaitingAttendedEvents: true});
        this.getAttendedEvents();
    };

    navigateToSelectedEvent = (eventID) => {
        const {mainNavigation} = this.props.screenProps;
        if (eventID){
            navigateToEvent(mainNavigation,eventID);
        } else {
            console.log(`Invalid eventID ${eventID}`);
        }
    };
}