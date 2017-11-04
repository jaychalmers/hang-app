import React from 'react';
import {Text,View,Image} from 'react-native';

class Events extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Events',
        tabBarIcon: ({ tintColor }) => (
            <Image
                style={{width: 20, height: 20}}
                source={require('./../../../static/images/icons/calendar2.png')}/>
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