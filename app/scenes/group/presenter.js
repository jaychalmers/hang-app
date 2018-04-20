import React from 'react';
import {View,Text,Alert,StyleSheet} from 'react-native'
import Header from './components/header';
import LoadingScreen from './../common/loadingScreen';

export default class extends React.Component {
    componentDidUpdate(){
        if (this.props.error) {
            Alert.alert(
                'Error',
                'There was a problem loading the group. Please try again later.',
                [{text: 'OK',onPress: () => {}}]
            )
        }
    }

    render(){
        const {
            group,
            navigation
        } = this.props;
        if (!group){
            return (
                <LoadingScreen/>
            )
        } else {
            return (
                <View style={styles.component}>
                    <View style={styles.header}>
                        <Header
                            name={group.name}
                            city={group.city}
                            photo={group.photo}
                            navigation={navigation}
                        />
                    </View>
                    <View style={styles.body}>
                        <Text>This will be the body (Tab Navigator)</Text>
                    </View>
                </View>
            )
        }
    }
}

const flexValues = {
    header: 1,
    body: 3
};

const styles = StyleSheet.create({
    component: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    header: {
        flex: flexValues.header
    },
    body: {
        flex: flexValues.body,
        backgroundColor: 'red',
    }
});