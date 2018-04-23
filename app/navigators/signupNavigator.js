import {StackNavigator} from 'react-navigation';
import React from 'react';

/*
 This navigator controls the signup sequence
    Username/Password -> Details -> Photo -> etc...

 */

//Screens
import SignUp from './../scenes/signupLogin/signUp';
import Details from './../scenes/signupLogin/details';
import Photo from './../scenes/signupLogin/photo';
import Finish from './../scenes/signupLogin/finish';

const Nav = StackNavigator(
    {
        SignUp: {
            screen: SignUp,
            navigationOptions: {
                title: 'SignUp'
            }
        },
        Details: {
            screen: Details,
            navigationOptions: {
                title: 'Details'
            }
        },
        Photo: {
            screen: Photo,
            navigationOptions: {
                title: 'Photo'
            }
        },
        Finish: {
            screen: Finish,
            navigationOptions: {
                title: 'Finish'
            }
        }
    },
    {
        initialRoute: 'SignUp',
        headerMode: 'none',
        navigationOptions: {
            gesturesEnabled: false
        }
    }
);

export default class extends React.Component {
    render(){
        const {reloadUser} = this.props.screenProps;
        return (
            <Nav screenProps={{reloadUser: reloadUser}}/>
        );
    }
}