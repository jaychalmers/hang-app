import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity,ActivityIndicator} from 'react-native';
import styleGuide from "./../../../../../config/styles";
import * as _ from 'lodash';
import AttendanceButton from './attendanceButton';
const moment = require('moment');

export default class extends React.Component {
    render(){
        const {
            event,
            navigateTo,
            setAttendingTo,
            user
        } = this.props;

        const userIsAttending = _.includes(this.props.event.attending,user.id);
        const eventStartTime = event.schedule[0].startTime;
        const location = event.schedule[0].googlePlace.name + ", " + _.find(event.schedule[0].googlePlace.address_components,(component)=>{
            return _.includes(component.types,"postal_town");
        }).long_name;
        const price = "Free";
        const photo = event.photo;
        return (
            <TouchableOpacity style={styles.card} onPress={()=>navigateTo(event._id)}>
                <View style={styles.cardContent}>
                    <View style={styles.leftColumn}>
                        <View style={styles.imageView}>
                            {photo ? <Image style={styles.image} source={{uri: photo}}/> :
                                <ActivityIndicator/>
                            }
                        </View>
                        <View style={styles.dateView}>
                            <Text style={styles.dateDay}>{moment(eventStartTime).format("DD")}</Text>
                            <Text style={styles.dateMonth}>{moment(eventStartTime).format("MMM")}</Text>
                        </View>
                    </View>
                    <View style={styles.rightColumn}>
                        <View style={styles.rightTop}>
                            <Text style={styles.eventName} numberOfLines={1}>{event.name}</Text>
                            <Text style={styles.eventDescription} numberOfLines={2}>{event.description}</Text>
                        </View>
                        <View style={styles.rightBottom}>
                            <View style={styles.bottomDetails}>
                                <Text style={styles.eventLocation}>{location}</Text>
                                <Text style={styles.eventTime}>{moment(eventStartTime).format("h:mm a")}</Text>
                            </View>
                            <View style={styles.bottomButtons}>
                                <Text style={styles.eventPrice}>{price}</Text>
                                <Text style={styles.eventAttendance}>{event.attending.length} Going</Text>
                                <AttendanceButton
                                    onPress={()=>setAttendingTo(event._id,!userIsAttending)}
                                    attending={userIsAttending}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}



const flexValues = {
    leftSide: 1,
    rightSide: 5,
    bottomRightDetails: 5,
    bottomRightButtons: 3
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: styleGuide.colorPalette.white,
        width: 327,
        height: 117,
        borderRadius: 6,
        shadowColor: 'rgb(0,0,0)',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 4,
        shadowOpacity: 0.5,
        position: 'absolute',
        bottom: 67,
        elevation: 1
    },
    cardContent: {
        position: 'relative',
        flex: 1,
        flexDirection: 'row',
        padding: 10
    },
    leftColumn: {
        flex: flexValues.leftSide,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imageView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 3,
        resizeMode: Image.resizeMode.contain
    },
    dateView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    dateDay: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 28,
        color: styleGuide.colorPalette.warmGrey
    },
    dateMonth: {
        fontFamily: 'Montserrat-Light',
        fontSize: 14,
        color: 'red',
        lineHeight: 14,
    },
    rightColumn: {
        flex: flexValues.rightSide,
        flexDirection: 'column',
        alignItems: 'stretch',
        marginLeft: 12,
        justifyContent: 'space-between',
    },
    rightTop: {
        flex: 1,
        justifyContent: 'flex-start',
        marginRight: 40,
    },
    eventName: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 18,
        color: 'black'
    },
    eventDescription: {
        fontFamily: 'Montserrat-Light',
        fontSize: 10,
        color: styleGuide.colorPalette.warmGrey
    },
    rightBottom: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    bottomDetails: {
        flex: flexValues.bottomRightDetails
    },
    eventLocation: {
        fontFamily: 'Montserrat-Light',
        fontSize: 12,
        color: styleGuide.colorPalette.warmGrey
    },
    eventTime: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        color: 'red'
    },
    bottomButtons: {
        flex: flexValues.bottomRightButtons,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    eventPrice: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        color: styleGuide.colorPalette.warmGrey
    },
    eventAttendance: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        color: styleGuide.colorPalette.warmGrey
    }
});