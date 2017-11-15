import React from 'react';
import {StackNavigator} from 'react-navigation';
import {Font} from 'expo';


//TODO: Seperate all these into a index files for each screen directory
import OpenHang from './screens/signupLogin/open-hang/open-hang';
import Login from './screens/signupLogin/login/login';
import SignUp from './screens/signupLogin/sign-up/sign-up';
import HomeNavigator from './screens/home/homeNavigator/homeNavigator';
import ForgottenPassword from './screens/signupLogin/forgotten-password/forgotten-password';
import Calendar from './screens/home/calendar/calendar';

const Navigator = StackNavigator(
    {
        //signupLogin
        OpenHang: { screen: OpenHang },
        Login: { screen: Login },
        SignUp: { screen: SignUp },
        ForgottenPassword: { screen: ForgottenPassword },
        //home
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
        Calendar: { screen: Calendar }
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none',
    }
);

export default class App extends React.Component {
    state = {
        fontLoaded: false,
    };

    render(){
        return this.state.fontLoaded ? <Navigator/> : null;
    }

    async componentDidMount(){
        await Font.loadAsync({
            'Montserrat-Light': require('./static/fonts/Montserrat-Light.otf'),
            'Montserrat-Regular': require('./static/fonts/Montserrat-Regular.otf'),
            'SignPainter-HouseScript': require('./static/fonts/SignPainter-HouseScript.ttf'),
        });
        this.setState({fontLoaded: true});
    }
}