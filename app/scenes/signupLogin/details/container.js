import React from 'react';
import Presenter from './presenter';
const every = require('lodash/every');

//TODO: Social logins
export default class extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            dob: null,
            city: "",
            awaitingServerResponse: false,
        };
    }

    render() {
        const {goBack} = this.props.navigation;
        const name = this.props.navigation.state.params.profile.name;
        return (
            <Presenter
                name={name}
                goBack={() => {goBack()}}
                updateDob={this.updateDateOfBirth}
                next={this.next}
                {...this.state}
            />
        )
    }

    next = () => {
        //TODO: Complete error behaviour
        const {
            dob,
            city
        } = this.state;
        const {auth,profile} = this.props.navigation.state.params;
        if (!dob || !city) {
            //TODO: Missing details - do we care?
            console.log("Missing user detail fields");
        }
        profile.dob = dob;
        profile.city = city;
        const {navigate} = this.props.navigation;
        navigate('Photo',{
            profile: profile,
            auth: auth
        });
    };

    updateDateOfBirth = (date) => {
        this.setState({dob: date});
    }
}