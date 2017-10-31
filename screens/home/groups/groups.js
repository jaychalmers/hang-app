import React from 'react';
import {Text,View} from 'react-native';

class Groups extends React.Component {
    static navigationOptions = {
        title: 'Groups',
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
                <Text>This is a Groups component</Text>
            </View>
        )
    }
}

export default Groups;