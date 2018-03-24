import {StackNavigator} from 'react-navigation';
import React from 'react';
import {View,StatusBar} from 'react-native';

/*
This Navigator is the main body of the app which the user will interact with.
It receives the user information from the AuthNavigator, and passes it
on to all its child screens.

The initial route is the Home screen, which is itself a Tab Navigator
which contains the map view, groups discovery, the users profile
controls, etc...

Any screens which stack on TOP of that - like clicking on an
individual event, for instance, should be added to this Navigator.
 */

//Screens
import Home from "./homeNavigator";
import Calendar from "./../scenes/calendar/calendar";
import Event from "./../scenes/event";
import Create from "./../scenes/create";

const MyNavigator = StackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                title: 'Home'
            }
        },
        Calendar: {
            screen: Calendar,
            navigationOptions: {
                title: 'Calendar'
            }
        },
        Event: {
            screen: Event,
            navigationOptions: {
                title: 'Event'
            }
        },
        Create: {
            screen: Create,
            navigationOptions: {
                title: 'Create'
            }
        }
    },
    {
        initialRoute: 'Home',
        headerMode: 'none',
        navigationOptions: {
            gesturesEnabled: false
        }
    }
);

export default class MainNavigator extends React.Component {
    render(){
        const {user,location} = this.props.navigation.state.params;
        return (
            <View style={{flex: 1}}>
                <StatusBar
                    barStyle={"light-content"}
                    hidden={false}
                />
                <MyNavigator screenProps={{user,location}}/>
            </View>
        )
    }
}