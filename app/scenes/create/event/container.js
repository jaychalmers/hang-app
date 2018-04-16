import React from 'react';
import Presenter from './presenter';
import {get,post} from './../../../services/api';
import {ImagePicker} from 'expo';
import {warning} from "../../../lib/alerts";
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
            repeat: null,
            image: null,
            awaitingServerResponse: false,
        };
        this.getGroups();
    }

    render() {
        const {cancel} = this.props.screenProps;
        const props = {
            imagePicker: this.imagePicker,
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
        try {
            const groups = await get(`groups/byUser/${user.id}`);
            this.setState({
                myGroups: groups
            });
        } catch (e) {
            console.log("Failed: " + e);
        }
    };

    imagePicker = async () => {
        const image = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: 'Images',
            quality: 1, //TODO: should we compress it?
            base64: true
        });
        if (image.cancelled) {
            console.log("No image picked");
        } else {
            this.setState({
                image: "data:image/jpeg;base64," + image.base64
            });
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
            category,
        } = this.state;
        let error = null;
        if (!title) {
            error = "Title is required!";
        } else if (!location) {
            error = "Location is required!";
        } else if (!locationDetails || locationDetails.status !== "OK") {
            error = "There was a problem retrieving the location details. Please try again later.";
        } else if (!description) {
            error = "Description is required!";
        } else if (!category) {
            error = "Category is required!";
        } else if (moment(endDate).isSameOrBefore(moment(startDate))) {
            error = "End date and time must be after start!";
        }
        if (error) {
            warning(error);
        } else {
            this.submitEvent();
        }
    };

    submitEvent = async () => {
        //TODO: Once we implement schedules, this needs expanding
        const {user} = this.props.screenProps;
        const {
            title,
            description,
            startDate,
            endDate,
            locationDetails,
            category,
            group,
            image
        } = this.state;
        //MANDATORY FIELDS
        const event = {
            name: title,
            creator: user.id,
            description: description,
            schedule: [
                {
                    startTime: startDate,
                    endTime: endDate,
                    description: description,
                    googlePlace: locationDetails.result
                }
            ],
            //TODO: there is no support for choosing price at the moment - default to 0
            price: 0
        };
        //OPTIONAL FIELDS
        //if the user tied this event to a group, interests should be the selected category AND the group category
        const interests = [
            category
        ];
        if (group) {
            //If there is a group, add it to event and add its categories to interests
            //TODO: Ensure uniqueness
            event.group = group._id;
            interests.push(...group.interests);
        }
        event.interests = interests;
        if (image) event.photo = image;
        try {
            this.setState({
                awaitingServerResponse: true
            });
            await post('/events/newEvent',event);
            this.props.screenProps.home();
        } catch (e) {
            warning("There was a problem creating your event. Please try again later!");
        }
    }
}