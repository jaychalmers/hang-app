import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import StatusButton from './statusButton';
import styleGuide from './../../../../../config/styles';

export default class extends React.Component {
    render(){
        const {
            item,
            onClick,
            active,
            type
        } = this.props;
        const noAttending = item.attending.length;
        return (
            <View style={styles.component}>
                <View style={styles.image}/>
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
            </View>
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
    image: {
        height: 100,
        width: 100,
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
    }
});