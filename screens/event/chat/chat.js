import React from 'react';
import {Text,View,Image} from 'react-native';
import {tabBarIcon} from './../eventTabNavigator/style';

class Chat extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Photos',
        tabBarIcon: ({ focused, tintColor }) => (
            <Image
                style={{tintColor: tintColor,...tabBarIcon}}
                source={require('./../../../static/images/icons/comment.png')}/>
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
                <Text>Photos screen</Text>
            </View>
        )
    }
}

export default Chat;