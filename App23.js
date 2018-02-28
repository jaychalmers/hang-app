import React from 'react';
import {AsyncStorage} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {Font} from 'expo';
import * as _ from 'lodash';


//TODO: Seperate all these into a index files for each screen directory
import Controller from './screens/controller/controller';
import OpenHang from './screens/signupLogin/open-hang/open-hang';
import Login from './screens/signupLogin/login/login';
import SignUp from './screens/signupLogin/sign-up/sign-up';
import ForgottenPassword from './screens/signupLogin/forgotten-password/forgotten-password';
import HomeNavigator from './screens/home/homeNavigator/homeNavigator';
import Calendar from './screens/home/calendar/calendar';
import Event from './screens/event/event/event'

const Navigator = StackNavigator(
    {
        //controller page
        Controller: { screen: Controller },
        //authorisation pages
        OpenHang: { screen: OpenHang },
        Login: { screen: Login },
        SignUp: { screen: SignUp },
        ForgottenPassword: { screen: ForgottenPassword },
        //main app pages
        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                title: 'HomeNavigator',
                header: {
                    //TODO: Make it so you can't swipe back onto login screen. See: https://stackoverflow.com/questions/42831685/disable-back-button-in-react-native-navigation
                    left: null
                }
            }
        },
        Calendar: { screen: Calendar },
        Event: { screen: Event }
    },
    {
        initialRouteName: 'Controller',
        headerMode: 'none',
    }
);

export default class App extends React.Component {
    state = {
        asyncFontComplete: false
    };

    render() {
        if (this.appIsReady()) {
            return <Navigator/>
        } else {
            return null; //If still waiting for everything to load, show nothing
        }
    }

    async loadFontsAsync(){
        await Font.loadAsync({
            'Montserrat-Light': require('./static/fonts/Montserrat-Light.otf'),
            'Montserrat-Regular': require('./static/fonts/Montserrat-Regular.otf'),
            'SignPainter-HouseScript': require('./static/fonts/SignPainter-HouseScript.ttf'),
        });
        this.setState({asyncFontComplete: true});
    }

    componentDidMount(){
        this.loadFontsAsync();
    }

    appIsReady(){
        return _.every([
            this.state.asyncFontComplete
        ],Boolean);
    }
}