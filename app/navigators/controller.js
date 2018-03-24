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
    }

    componentWillMount(){
        Location.setApiKey(GOOGLE.API_KEY);
        this.loadFontsAsync();
        this.loadUserAsync();
        this.getPermissionsAsync();
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
            console.log("Found local user: " + JSON.stringify(user));
        } else {
            console.log("No local user found.");
        }
        this.setState({
            userLoaded: true,
            user: user ? user : null
        });
    }

    componentDidUpdate(){
        const { navigate } = this.props.navigation;
        //TODO: SWITCH BACK TO CORRECT THING FOR PRODUCTION
        //const {user} = this.state;
        const user = {
            id: "5a9694ab8d81214028025ec8",
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTk2OTRhYjhkODEyMTQwMjgwMjVlYzgiLCJpYXQiOjE1MTk4MTc4OTl9.hywA-IUqbi0Ul2oH0KkYEAT5Jzo_lISrm-tH1fh0EF0"
        };
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