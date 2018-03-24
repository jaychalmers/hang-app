import React from 'react';
import Presenter from './presenter';
import {Alert} from 'react-native';

export default class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return <Presenter
            pressEditProfile={this.pressEditProfile}
            pressLocationSettings={this.pressLocationSettings}
            pressAbout={this.pressAbout}
            pressSignOut={this.pressSignOut}
        />
    }

    pressEditProfile = () => {
        this.notImplemented();
    };

    pressLocationSettings = () => {
        this.notImplemented();
    };

    pressAbout = () => {
        this.notImplemented();
    };

    pressSignOut = () => {
        this.notImplemented();
    };

    notImplemented = () => {
        Alert.alert(
           'Feature not implemented!',
           "Sorry, that feature isn't yet implemented.",
           [
               {text: 'No worries dude', onPress: () => {}}
           ]
        );
    };
}