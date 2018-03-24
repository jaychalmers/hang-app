import React from 'react';
import {View,ActivityIndicator} from 'react-native';

export default class extends React.Component {
    render() {
        return (
            <View style={pageStyle}>
                <ActivityIndicator size="large"/>
            </View>
        )
    }
}

const pageStyle = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
};