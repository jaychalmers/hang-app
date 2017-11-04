import React from 'react';
import {Text,View,Image} from 'react-native';

class Groups extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Groups',
        tabBarIcon: ({ tintColor }) => (
            <Image
                style={{width: 20, height: 20}}
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