import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class extends React.Component {
    render(){
        const {
            group
        } = this.props.screenProps;
        const noEvents = group.events ? group.events.length : 0;
        return (
            <View style={styles.component}>
                <Text>Note: There was no design supplied for this screen.</Text>
                <Text>{group.name}</Text>
                <Text>{group.description}</Text>
                <Text>{group.city}</Text>
                <Text>{group.members.length} members</Text>
                <Text>{noEvents} events</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    component: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});