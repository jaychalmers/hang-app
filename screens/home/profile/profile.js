import React from 'react';
import {Text,View} from 'react-native';

class Profile extends React.Component {
    static navigationOptions = {
        title: 'Profile',
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
                <Text>This is a Profile component</Text>
            </View>
        )
    }
}

export default Profile;