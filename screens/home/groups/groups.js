import React from 'react';
import {Text,View,Image} from 'react-native';
import {tabBarIcon} from './../homeNavigator/style';

class Groups extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Groups',
        tabBarIcon: ({ focused, tintColor }) => (
            <Image
                style={{tintColor: tintColor,...tabBarIcon}}
                source={require('./../../../static/images/icons/group-profile-users.png')}/>
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
                <Text>This is a Groups component</Text>
            </View>
        )
    }
}

export default Groups;