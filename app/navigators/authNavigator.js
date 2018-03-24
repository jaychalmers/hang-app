import {StackNavigator} from 'react-navigation';

//controller screens
import Controller from "./controller";
//SignupLogin Screens
import OpenHang from "./../scenes/signupLogin/openHang/openHang";
import SignUp from "./../scenes/signupLogin/signUp/signUp";
import Login from "./../scenes/signupLogin/login/login";
//--------FORGOTTEN PASSWORD
//Main
import Main from "./mainNavigator";

export default StackNavigator(
    {
        Controller: {
            screen: Controller,
            navigationOptions: {
                title: 'Controller'
            }
        },
        OpenHang: {
            screen: OpenHang,
            navigationOptions: {
                title: 'OpenHang'
            }
        },
        Login: {
            screen: Login,
            navigationOptions: {
                title: 'Login'
            }
        },
        SignUp: {
            screen: SignUp,
            navigationOptions: {
                title: 'SignUp'
            }
        },
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'Main'
            }
        }
    },
    {
        initialRoute: 'Controller',
        headerMode: 'none',
        navigationOptions: {
            gesturesEnabled: false
        }
    }
);