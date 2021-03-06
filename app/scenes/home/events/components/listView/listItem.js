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
        const noAttending = item.attending.length;
        const image = item.photo;
        return (
            <TouchableOpacity style={styles.component} onPress={() => navigateTo(item._id)}>
                <View style={styles.imageView}>
                    {image ?
                        <Image
                            style={styles.image}
                            source={{uri: image}}
                        /> :
                        <ActivityIndicator/>
                    }
                </View>
                <View style={styles.contentView}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemDetail}>{noAttending} {(noAttending === 1) ? "person" : "people"} attending</Text>
                    <Text style={styles.itemDetail}>{item.schedule[0].googlePlace.formatted_address}</Text>
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
        resizeMode: Image.resizeMode.contain
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
    }
});