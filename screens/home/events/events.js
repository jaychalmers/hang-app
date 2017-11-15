import React from 'react';
import {Text,View,Image} from 'react-native';
import {tabBarIcon} from './../homeNavigator/style';

class Events extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Events',
        tabBarIcon: ({ focused, tintColor }) => (
            <Image
                style={{tintColor: tintColor,...tabBarIcon}}
                source={require('./../../../static/images/icons/calendar.png')}/>
        )
    };
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                }}
            >
                <Text>This is an Events component</Text>
            </View>
        )
    }
}

export default Events;