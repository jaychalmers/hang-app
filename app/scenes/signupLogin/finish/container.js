import React from 'react';
import Presenter from './presenter';
import {Alert} from 'react-native';
import {post} from './../../../services/api';

//TODO: Social logins
export default class extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            awaitingServerResponse: false,
        };
    }

    render() {
        return (
            <Presenter
                {...this.state}
                finish={this.finish}
            />
        )
    }

    finish = async () => {
        const {reloadUser} = this.props.screenProps;
        const {
            auth,
            profile
        } = this.props.navigation.state.params;
        this.setState({awaitingServerResponse: true});
        try {
            const success = await post(`users/updateDetails/${auth._id}`,profile);
            reloadUser();
        } catch (e) {
            Alert.alert(
                'Signup Error',
                'There was a problem saving your details:\n\n' +
                e +
                '\n\nYou can update them from the Profile screen later.',
                [
                    {text: 'OK', onPress: () => {reloadUser();}},
                ]
            );
        }
    }
}