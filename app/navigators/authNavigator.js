import React from 'react';
import {StackNavigator} from 'react-navigation';

//SignupLogin Screens
import OpenHang from "./../scenes/signupLogin/openHang/container";
import SignUp from "./signupNavigator";
import Login from "./../scenes/signupLogin/login/container";
//FORGOTTEN PASSWORD

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