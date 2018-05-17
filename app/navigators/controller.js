import React from 'react';
import {View,Text} from 'react-native';
import * as _ from 'lodash';
import {Font,Location,Permissions,Asset} from 'expo';
import {loadLocalUser} from "./../services/localUserDetails";
import {GOOGLE} from './../config/constants';
import MainNavigator from './mainNavigator';
import AuthNavigator from './authNavigator';
import LoadingScreen from './../scenes/common/loadingScreen';

/*
This controller screen ensures any assets (EG fonts) are loaded
before the app renders. It also checks whether there is a user
saved locally (IE, the user is logged in), and returns a different
navigator depending on which - AuthNavigator if not logged in,
MainNavigator if logged in.
 */

export default class Controller extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fontsLoaded: false,
            userLoaded: false,
            imagesLoaded: false,
            user: null
        };
    }

    componentWillMount(){
        Location.setApiKey(GOOGLE.API_KEY);
        this.loadFontsAsync();
        this.loadImagesAsync();
        this.getPermissionsAsync();
        this.reloadUser();
    }

    reloadUser = () => {
        this.setState({
            user: null,
            userLoaded: false
        });
        this.loadUserAsync();
    };

    appIsReady(){
        return _.every([
            this.state.fontsLoaded,
            this.state.userLoaded,
            this.state.imagesLoaded,
        ],Boolean);
    }

    async loadImagesAsync(){
        //TODO: See if you can automatically get the file paths instead of using the images const
        await Promise.all(images.map((image)=>{
            return Asset.fromModule(image).downloadAsync();
        }));
        this.setState({imagesLoaded: true});
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

    render(){
        const {user} = this.state;
        const signedIn = (user != null);
        if (this.appIsReady()) {
            if (signedIn) {
                return <MainNavigator user={user} reloadUser={this.reloadUser}/>;
            } else {
                return <AuthNavigator reloadUser={this.reloadUser}/>;
            }
        } else {
            return <LoadingScreen/>;
        }
    }
}

const images = [
    require('./../../static/images/background/calendar.png'),
    require('./../../static/images/background/login.png'),
    require('./../../static/images/background/openHang.png'),
    require('./../../static/images/background/register.png'),
    require('./../../static/images/background/signUp.png'),
    require('./../../static/images/icons/add.png'),
    require('./../../static/images/icons/down-arrow-inside-circle.png'),
    require('./../../static/images/icons/create-new-event.png'),
    require('./../../static/images/icons/create-new-group.png'),
    require('./../../static/images/icons/pin.png'),
    require('./../../static/images/icons/clock.png'),
    require('./../../static/images/icons/list.png'),
    require('./../../static/images/icons/photo-of-a-landscape.png'),
    require('./../../static/images/icons/man-user.png'),
    require('./../../static/images/icons/delete.png'),
    require('./../../static/images/icons/checked.png'),
    require('./../../static/images/icons/bookmark-black-shape.png'),
    require('./../../static/images/icons/bookmark-white.png'),
    require('./../../static/images/icons/left-arrow.png'),
    require('./../../static/images/icons/home.png'),
    require('./../../static/images/icons/calendar.png'),
    require('./../../static/images/icons/group-profile-users.png'),
    require('./../../static/images/icons/gps-location-symbol.png'),
    require('./../../static/images/icons/info.png'),
    require('./../../static/images/icons/sign-out-option.png'),
];