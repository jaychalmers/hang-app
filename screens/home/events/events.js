import React from 'react';
import {Text,View} from 'react-native';

class Events extends React.Component {
    static navigationOptions = {
        title: 'Events',
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