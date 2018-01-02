import React from 'react';
import {Text,View,Image} from 'react-native';
import {tabBarIcon} from './../eventTabNavigator/style';

class People extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Photos',
        tabBarIcon: ({ focused, tintColor }) => (
            <Image
                style={{tintColor: tintColor,...tabBarIcon}}
                source={require('./../../../static/images/icons/man-user.png')}/>
        )
    };

    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return (
            <View>
                <Text>People screen</Text>
            </View>
        )
    }
}

export default People;