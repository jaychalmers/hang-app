import React from 'react';
import Presenter from './presenter';
import { NavigationActions } from 'react-navigation';
import {get} from './../../services/api';
import {getDistance,convertUnit} from 'geolib';

export default class EventContainer extends React.Component {
    constructor(props) {
        super(props);
        this.eventID = this.props.navigation.state.params.eventID;
        this.state = {
            event: null,
            error: null
        };
    }

    componentWillMount(){
        this.getEvent();
    }

    render() {
        const {user} = this.props.screenProps;
        const {event,error} = this.state;
        const distance = this.getDistance(event);
        return <Presenter
            user={user}
            distance={distance}
            event={event}
            error={error}
            navigateBack={this.navigateBack}
            navigateHome={this.navigateHome}
        />
    }

    /* Controller methods - Anything that the view doesn't need to interact with */
    async getEvent(){
        try {
            const event = await get(`/events/byID/${this.eventID}`);
            this.setState({
                event: event
            });
        } catch (e) {
            this.setState({
                error: e
            })
        }
    }

    getDistance(event){
        if (event) {
            const location = this.props.navigation.state.params.location;
            const userLocation = {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            };
            const eventLocation = {
                latitude: event.schedule[0].googlePlace.geometry.location.lat,
                longitude: event.schedule[0].googlePlace.geometry.location.lng
            };
            return convertUnit('mi',getDistance(userLocation,eventLocation),2);
        } else {
            return null;
        }
    }

    /* Interface methods - Button controllers, etc. Remember binding. */
    navigateBack = () => {
        const back = NavigationActions.back();
        this.props.navigation.dispatch(back);
    };

    navigateHome = () => {
        const home = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: 'Home'})],
        });
        this.props.navigation.dispatch(home);
    }
}