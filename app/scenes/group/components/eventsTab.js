import React from 'react';
import {View,Text,TouchableOpacity,FlatList,StyleSheet} from 'react-native';
import {navigateToEvent} from "../../../lib/leafNavigation";

export default class extends React.Component {
    render(){
        const {
            events
        } = this.props.screenProps;
        return (
            <View style={styles.component}>
                <Text>Note: no design for this screen was supplied.</Text>
                <FlatList
                    data={events}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                    lazy={true}
                />
            </View>
        )
    }

    renderItem = ({item}) => {
        const { navigation } = this.props.screenProps;
        return (
            <TouchableOpacity style={styles.event} onPress={()=>navigateToEvent(navigation,item._id)}>
                <Text>{item.name}</Text>
            </TouchableOpacity>
        )
    };

    keyExtractor = (item, index) => item._id;
}

const styles = StyleSheet.create({
    component: {
        flex: 1,
        flexDirection: 'column',
        padding: 22,
        alignItems: 'stretch'
    },
    event: {
        height: 80,
        width: 200,
        margin: 4,
        borderWidth: 1,
        borderColor: 'gray',
        borderStyle: 'solid',
        alignItems: 'center',
        justifyContent: 'center'
    }
});