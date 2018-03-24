import React from 'react';
import Presenter from './presenter';
import {get,post} from '../../../services/api';
import {Location} from 'expo';
const find = require('lodash/find');

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
        } catch (e) {
            this.setState({
                error: e,
                awaitingServerResponse: false
            });
        }
    }

    async getLocation(){
        //If either of these return falsey, you might have problems on certain Android devices.
        const providerStatus = await Location.getProviderStatusAsync();
        console.log("locationServicesEnabled: " + providerStatus.locationServicesEnabled);
        console.log("gpsAvailable: " + providerStatus.gpsAvailable);

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
        const {mainNavigate} = this.props.screenProps;
        const {location} = this.state;
        if (eventID){
            mainNavigate('Event',{eventID: eventID,location: location});
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