import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
import styleGuide from './../../../../../config/styles';
import {convertPrice} from "../../../../../lib/string";
const moment = require('moment');
const _ = require('lodash/collection');

export default class extends React.Component {
    render(){
        const {item: event,navigateTo} = this.props;
        const time = moment(event.schedule[0].startTime);
        const location = event.schedule[0].googlePlace.name + ", " + _.find(event.schedule[0].googlePlace.address_components,(component)=>{
            return _.includes(component.types,"postal_town");
        }).long_name;
        const price = convertPrice(event.price);

        return (
            <TouchableOpacity onPress={()=>navigateTo(event._id)}>
                <View>
                    <View style={styles.itemView}>
                        <View style={styles.leftView}>
                            <Text style={styles.dateDayOfMonth}>{time.format("DD")}</Text>
                            <Text style={styles.dateMonth}>{time.format("MMM")}</Text>
                            <Text style={styles.price}>{price}</Text>
                        </View>
                        <View style={styles.rightView}>
                            <View style={styles.nameView}>
                                <Text style={styles.name}>{event.name}</Text>
                            </View>
                            <View style={styles.detailsView}>
                                <Image style={styles.detailsIcon} source={require('../../../../../../static/images/icons/pin.png')}/>
                                <Text style={styles.detailsText}>{location}</Text>
                                <Image style={styles.detailsIcon} source={require('../../../../../../static/images/icons/clock.png')}/>
                                <Text style={styles.detailsText}>{time.format("h:mm a")}</Text>
                            </View>
                            <View style={styles.attendanceView}>
                                <Text style={styles.attendanceText}>{event.attending.length} Going</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.separator}/>
                </View>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    itemView: {
        height: 88,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    leftView: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: 12
    },
    dateDayOfMonth: {
        fontSize:36,
        fontFamily:'Montserrat-Regular',
        color:styleGuide.colorPalette.warmGrey
    },
    dateMonth: {
        fontSize:18,
        fontFamily:'Montserrat-Light',
        color:'red'
    },
    price: {
        fontSize:12,
        fontFamily:'Montserrat-Regular',
        color:styleGuide.colorPalette.warmGrey
    },
    rightView: {
        flex: 4,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    nameView: {
        flex: 5,
        justifyContent: 'flex-end'
    },
    name: {
        fontSize:18,
        fontFamily: 'Montserrat-Regular'
    },
    detailsView: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center'
    },
    detailsIcon: {
        width: 9,
        height: 9,
        tintColor: styleGuide.colorPalette.warmGrey,
        opacity: 0.5
    },
    detailsText: {
        fontSize:12,
        fontFamily: 'Montserrat-Light',
        color:styleGuide.colorPalette.warmGrey,
        marginLeft: 2,
        marginRight: 12
    },
    attendanceView: {
        flex: 5
    },
    attendanceText: {
        fontSize:12,fontFamily: 'Montserrat-Regular',color:styleGuide.colorPalette.warmGrey
    },
    separator: {
        height: 1,
        width: '88%',
        backgroundColor: styleGuide.colorPalette.whiteTwo,
        opacity: 0.5
    }
});