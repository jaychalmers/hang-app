import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity,ActivityIndicator} from 'react-native';
import StatusButton from './statusButton';
import styleGuide from './../../../../../config/styles';

export default class extends React.Component {
    render(){
        const {
            item,
            onClick,
            active,
            type,
            navigateTo
        } = this.props;
        const noMembers = item.members.length;
        const noEvents = item.events.length;
        //TODO: Default images
        const photo = item.photo;
        return (
            <TouchableOpacity style={styles.component} onPress={() => navigateTo(item._id)}>
                <View style={styles.imageView}>
                    {photo ? <Image
                        style={styles.image}
                        source={{uri: photo}}/>
                        : <ActivityIndicator/>
                    }
                </View>
                <View style={styles.contentView}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemDetail}>{noMembers} {(noMembers === 1) ? "person has" : "people have"} joined</Text>
                    <Text style={styles.itemDetail}>{noEvents} {(noEvents === 1) ? "event" : "events"} hosted</Text>
                    <Text style={styles.itemDetailLight} numberOfLines={2}>{item.description}</Text>
                    <StatusButton
                        onPress={()=>{onClick(item._id,!active)}}
                        active={active}
                        type={type}
                    />
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    component: {
        height: 100,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        marginBottom: 20,
    },
    imageView: {
        height: 100,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 100,
        width: 100,
        resizeMode: Image.resizeMode.cover,
        backgroundColor: 'blue'
    },
    contentView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginLeft: 12,
        paddingTop: 4,
        paddingBottom: 4
    },
    itemName: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        color: styleGuide.colorPalette.warmGrey
    },
    itemDetail: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        color: styleGuide.colorPalette.warmGrey
    },
    itemDetailLight: {
        fontFamily: 'Montserrat-Light',
        fontSize: 10,
        color: styleGuide.colorPalette.warmGrey
    },
});