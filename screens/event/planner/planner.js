import React from 'react';
import {Text,View,Image} from 'react-native';
import {tabBarIcon} from './../eventTabNavigator/style';

class Planner extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Planner',
        tabBarIcon: ({ focused, tintColor }) => (
            <Image
                style={{tintColor: tintColor,...tabBarIcon}}
                source={require('./../../../static/images/icons/list.png')}/>
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
                <Text>Planner screen</Text>
            </View>
        )
    }
}

export default Planner;