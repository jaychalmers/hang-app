import React from 'react';
import {View,Text,Alert} from 'react-native';
import LoadingScreen from './../common/loadingScreen';

export default class extends React.Component {
    componentDidUpdate(){
        if (this.props.error) {
            Alert.alert(
                'Error',
                'There was a problem loading the user. Please try again later.',
                [{text: 'OK',onPress: () => {}}]
            )
        }
    }

    render(){
        const {
            user
        } = this.props;
        if (!user){
            return (
                <LoadingScreen/>
            )
        } else {
            return (
                <View>
                    <Text>name: {user.name}</Text>
                    <Text>dob: {user.dob}</Text>
                    <Text>city: {user.city}</Text>
                </View>
            )
        }
    }
}