import React from 'react';
import Presenter from './presenter';
import {Alert} from 'react-native';
import {AsyncStorage} from 'expo';
import {deleteLocalUser} from "../../../services/localUserDetails";
import {navigateToUser} from "../../../lib/leafNavigation";
import {notImplemented} from "../../../lib/alerts";

export default class ProfileContainer extends React.Component {
    render() {
        return <Presenter
            pressMyProfile={this.pressMyProfile}
            pressLocationSettings={this.pressLocationSettings}
            pressAbout={this.pressAbout}
            pressSignOut={this.pressSignOut}
        />
    }

    pressMyProfile = () => {
        const {mainNavigation,user} = this.props.screenProps;
        navigateToUser(mainNavigation,user.id);
    };

    pressLocationSettings = () => {
        notImplemented();
    };

    pressAbout = () => {
        notImplemented();
    };

    pressSignOut = () => {
        //TODO: And then you have to navigate back to the controller
        Alert.alert(
            'Sign Out',
            'Are you sure you want to sign out?',
            [
                {text: 'Cancel', onPress: ()=>{}},
                {text: 'Confirm', onPress: ()=>{
                    const {reloadUser} = this.props.screenProps;
                    deleteLocalUser();
                    reloadUser();
                }}
            ]
        )
    };
}