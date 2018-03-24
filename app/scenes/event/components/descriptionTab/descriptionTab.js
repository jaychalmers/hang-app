import React from 'react';
import {Text,View,Image,StyleSheet} from 'react-native';
import styleGuide from './../../../../config/styles';
import {convertPrice} from "../../../../lib/string";
import * as _ from 'lodash';

export default class extends React.Component {
    constructor(props){
        super(props);
        this.event = this.props.screenProps.event;
    }

    render(){
        const event = this.event;
        const times = unpackEventTimes(event);
        const location = _.truncate(event.schedule[0].googlePlace.formatted_address,{length: 36,omission:"... (view map)"});
        return (
            <View style={styles.pageView}>
                <View style={styles.detailsView}>
                    <View style={styles.detailsLeft}>
                        <Text style={styles.dateDay}>{times.day}</Text>
                        <Text style={styles.dateMonth}>{times.month}</Text>
                        <Text style={styles.dateDayOfWeek}>{times.dayOfWeek}</Text>
                    </View>
                    <View style={styles.detailsRight}>
                        <View style={styles.detailsRightLine}>
                            <Image style={styles.detailsRightIcon} source={require('./../../../../../static/images/icons/pin.png')}/>
                            <Text style={styles.detailsText}>{location}</Text>
                        </View>
                        <View style={styles.detailsRightLine}>
                            <Image style={styles.detailsRightIcon} source={require('./../../../../../static/images/icons/clock.png')}/>
                            <Text style={styles.detailsText}>{times.startTime} - {times.endTime}</Text>
                        </View>
                        <View style={styles.detailsRightLine}>
                            <View style={{width: 10}}>
                                <Text style={styles.pound}>£</Text>
                            </View>
                            <Text style={styles.detailsText}>{convertPrice(event.price)}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.descriptionView}>
                    <Text style={styles.descriptionText}>{event.description}</Text>
                </View>
            </View>
        )
    }
}

unpackEventTimes = (event) => {
    const moment = require(('moment'));
    const eventStartTime = moment(event.schedule[0].startTime);
    const eventEndTime = moment(_.last(event.schedule).endTime);
    return {
        day: eventStartTime.format("DD"),
        month: eventStartTime.format("MMM"),
        dayOfWeek: eventStartTime.format("ddd"),
        startTime: eventStartTime.format("HH:mm"),
        endTime: eventEndTime.format("HH:mm")
    };
};

const flexValues = {
    details: 1,
    description: 2,
    detailsLeft: 1,
    detailsRight: 6
};

const styles = StyleSheet.create({
    pageView: {
        flex: 1,
        flexDirection: 'column'
    },
    detailsView: {
        height: 114,
        padding: '8%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    detailsLeft: {
        flex: flexValues.detailsLeft,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: styleGuide.colorPalette.whiteTwo
    },
    detailsRight: {
        flex: flexValues.detailsRight,
        justifyContent: 'center',
        paddingLeft: 12
    },
    detailsRightLine: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    detailsRightIcon: {
        width: 10,
        height: 10,
        tintColor: styleGuide.colorPalette.whiteTwo
    },
    dateDay: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 24,
        color: styleGuide.colorPalette.warmGrey
    },
    dateMonth: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        color: 'rgb(255,0,0)'
    },
    dateDayOfWeek: {
        fontFamily: 'Montserrat-Light',
        fontSize: 16,
        color: styleGuide.colorPalette.warmGrey
    },
    detailsText: {
        fontFamily: "Montserrat-Regular",
        fontSize: 12,
        color: styleGuide.colorPalette.warmGrey,
        marginLeft: 4,
    },
    descriptionView: {
        flex: flexValues.description,
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    descriptionText: {
        marginLeft: '8%',
        marginRight: '8%',
        fontFamily: 'Montserrat-Light',
        fontSize: 11,
        color: styleGuide.colorPalette.warmGrey
    },
    pound: {
        fontFamily: "Montserrat-Light",
        fontSize: 12,
        color: styleGuide.colorPalette.whiteTwo
    }
});