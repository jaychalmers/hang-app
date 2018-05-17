import React from 'react';
import {View,Text,Alert,StyleSheet} from 'react-native';
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
                <View style={styles.component}>
                    <Text>This page isn't fully implemented yet.</Text>
                    <Text>name: {user.name}</Text>
                    <Text>dob: {user.dob}</Text>
                    <Text>city: {user.city}</Text>
                    <Text>You can use gestures or the back button on Android to navigate back.</Text>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    component: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
});