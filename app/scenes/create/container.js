import React from 'react';
import {StackNavigator,NavigationActions} from 'react-navigation';

//screens
import Main from "./main/main";
import Event from './event/container';
import Group from './group/container';

const MyNavigator = StackNavigator(
    {
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'Main'
            }
        },
        Event: {
            screen: Event,
            navigationOptions: {
                title: 'Event'
            }
        },
        Group: {
            screen: Group,
            navigationOptions: {
                title: 'Group'
            }
        }
    },
    {
        initialRoute: 'Main',
        headerMode: 'none'
    }
);

export default class extends React.Component {

    render(){
        const user = this.props.screenProps.user;
        return (
            <MyNavigator
                screenProps={{
                    cancel: this.cancel,
                    home: this.home,
                    user: user
            }}/>
        )
    }

    cancel = () => {
        const back = NavigationActions.back();
        this.props.navigation.dispatch(back);
    };

    home = () => {
        this.props.navigation.navigate('Home');
    };
}