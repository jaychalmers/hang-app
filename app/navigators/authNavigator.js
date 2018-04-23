import React from 'react';
import {StackNavigator} from 'react-navigation';

//SignupLogin Screens
import OpenHang from "./../scenes/signupLogin/openHang/container";
import SignUp from "./signupNavigator";
import Login from "./../scenes/signupLogin/login/container";
//--------FORGOTTEN PASSWORD
//Main
import Main from "./mainNavigator";

const MyNavigator = StackNavigator(
    {
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
        initialRoute: 'OpenHang',
        headerMode: 'none',
        navigationOptions: {
            gesturesEnabled: false
        }
    }
);

export default class AuthNavigator extends React.Component {
    render(){
        const {reloadUser} = this.props;
        return (
            <MyNavigator screenProps={{reloadUser}}/>
        )
    }
}