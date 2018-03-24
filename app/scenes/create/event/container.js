import React from 'react';
import Presenter from './presenter';
import {post} from './../../../services/api';
import axios from 'axios';
const moment = require('moment');
import { GOOGLE } from './../../../config/constants';

export default class extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: null,
            group: null,
            location: null,
            locationDetails: null,
            description: null,
            schedule: null,
            startDate: new Date(),
            endDate: new Date(),
            category: null,
            myGroups: [],
            repeat: null
        };
        this.getGroups();
    }

    render() {
        const {cancel} = this.props.screenProps;
        const props = {
            cancel: cancel,
            updateTitle: this.updateTitle,
            updateDescription: this.updateDescription,
            updateStartDate: this.updateStartDate,
            updateEndDate: this.updateEndDate,
            setCategory: this.setCategory,
            setGroup: this.setGroup,
            submitEvent: this.submitEvent,
            checkEvent: this.checkEvent,
            updateLocation: this.updateLocation,
            ...this.state
        };
        return <Presenter {...props}/>
    }

    getGroups = async () => {
        const user = this.props.screenProps.user;
        const options = {
            id: user.id
        };
        try {
            const groups = await post("groups/byUser",options);
            this.setState({
                myGroups: groups
            });
        } catch (e) {
            console.log("Failed: " + e);
        }
    };

    updateTitle = (title) => {
        this.setState({title});
    };

    updateDescription = (description) => {
        this.setState({description});
    };

    updateStartDate = (startDate) => {
        this.setState({startDate});
        return true;
    };

    updateEndDate = (endDate) => {
        if (moment(endDate).isBefore(moment(this.state.startDate))) {
            return false;
        } else {
            this.setState({endDate: endDate});
            return true;
        }
    };

    updateLocation = async (location) => {
        const query = `placeid=${location.place_id}&key=${GOOGLE.PLACES_KEY}`;
        console.log(`https://maps.googleapis.com/maps/api/place/details/json?${query}`);
        try {
            const details = await axios({
                method: 'get',
                url: `https://maps.googleapis.com/maps/api/place/details/json?${query}`
            });
            this.setState({
                location: location,
                locationDetails: details.data
            });
        } catch (e) {
            console.log(e);
        }
    };

    setCategory = (category) => {
        this.setState({category});
    };

    setGroup = (group) => {
        this.setState({group});
    };

    //This speaks to the footer component and confirms whether it has
    //all the info it needs to send the request. Keeps all these checks
    //in the container file
    checkEvent = () => {
        const {
            title,
            location,
            locationDetails,
            startDate,
            endDate,
            description,
            category
        } = this.state;
        let error = null;
        if (!title) {
            error = "Title is required!";
        } else if (!location) {
            error = "Location is required!";
        } else if (!locationDetails || locationDetails.status !== "OK") {
            error = "There was a problem retrieving the location details. Please try again later.";
            error = JSON.stringify(locationDetails,null,2);
        } else if (!description) {
            error = "Description is required!";
        } else if (!category) {
            error = "Category is required!";
        } else if (moment(endDate).isSameOrBefore(moment(startDate))) {
            error = "End date and time must be after start!";
        }
        return error;
    };

    submitEvent = async () => {
        //TODO: Once we implement schedules, this needs expanding
        const {user} = this.props.screenProps;
        //MANDATORY FIELDS
        const event = {
            name: this.state.title,
            creator: user.id,
            description: this.state.description,
            schedule: [
                {
                    startTime: this.state.startDate,
                    endTime: this.state.endDate,
                    description: this.state.description,
                    googlePlace: this.state.locationDetails.result
                }
            ],
            //there is no support for choosing price at the moment - default to 0
            price: 0
        };
        //OPTIONAL FIELDS
        //if the user tied this event to a group, interests should be the selected category AND the group category
        const interests = [
            this.state.category
        ];
        const group = this.state.group;
        if (group) {
            //If there is a group, add it to event and add its categories to interests
            event.group = group._id;
            interests.push(...group.interests);
        }
        event.interests = interests;
        try {
            await post('/events/newEvent',event);
            this.props.screenProps.home();
        } catch (e) {
            console.log(e);
        }
    }
}