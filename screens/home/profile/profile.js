import React from 'react';
import {Text,View,Image} from 'react-native';
import {tabBarIcon} from './../homeNavigator/style';

class Profile extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ focused, tintColor }) => (
            <Image
                style={{tintColor: tintColor,...tabBarIcon}}
                source={require('./../../../static/images/icons/man-user.png')}/>
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
                <Text>This is a Profile component</Text>
            </View>
        )
    }
}

export default Profile;