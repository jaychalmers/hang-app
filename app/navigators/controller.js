import React from 'react';
import {View,Text} from 'react-native';
import * as _ from 'lodash';
import {Font,Location,Permissions} from 'expo';
import {loadLocalUser} from "./../services/localUserDetails";
import {GOOGLE} from './../config/constants';

/*
This controller screen ensures any assets (EG fonts) are loaded
before the app renders. It also checks whether there is a user
saved locally (IE, the user is logged in), and navigates within
the authNavigator accordingly - to the mainNavigator if we are
logged in, to the signupLogin splash screen if not.

It doesn't render anything - currently we get a white screen,
which might not be ideal.
 */

export default class Controller extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fontsLoaded: false,
            userLoaded: false,
            user: null
        };
        const willFocusSub = this.props.navigation.addListener(
            'willFocus',
            payload => {
                this.refresh();
            }
        );
    }

    componentWillMount(){
        Location.setApiKey(GOOGLE.API_KEY);
        this.loadFontsAsync();
        this.getPermissionsAsync();
        this.refresh();
    }

    refresh(){
        this.setState({
            userLoaded: false
        });
        this.loadUserAsync();
    }

    appIsReady(){
        return _.every([
            this.state.fontsLoaded,
            this.state.userLoaded
        ],Boolean);
    }

    async loadFontsAsync(){
        await Font.loadAsync({
            'Montserrat-Light': require('./../../static/fonts/Montserrat-Light.otf'),
            'Montserrat-Regular': require('./../../static/fonts/Montserrat-Regular.otf'),
            'SignPainter-HouseScript': require('./../../static/fonts/SignPainter-HouseScript.ttf'),
        });
        this.setState({fontsLoaded: true});
    }

    async getPermissionsAsync(){
        try {
            let {status} = await Permissions.getAsync(Permissions.LOCATION);
            //TODO: Hahahahaha. Do something better here.
            while (status !== 'granted') {
                await Permissions.askAsync(Permissions.LOCATION);
                status = await Permissions.getAsync(Permissions.LOCATION);
            }
        } catch (e) {
            console.error(e);
        }
    }

    async loadUserAsync(){
        const user = await loadLocalUser(); //Returns {id,token} if found, null if not
        if (user) {
            console.log("Found logged in user: " + JSON.stringify(user));
        } else {
            console.log("No logged in user found.");
        }
        this.setState({
            userLoaded: true,
            user: user ? user : null
        });
    }

    componentDidUpdate(){
        const { navigate } = this.props.navigation;
        const {user} = this.state;
        const signedIn = (user != null);
        if (this.appIsReady()) {
            if (signedIn) {
                navigate("Main", {user: user});
            } else {
                navigate("OpenHang");
            }
        }
    }

    render(){
        return null; //display nothing
    }
}