import React from 'react';
import {Text,View,Image,StyleSheet} from 'react-native';
import * as _ from 'lodash';
import styleGuide from './../../../../config/styles';
const moment = require('moment');

export default class Planner extends React.Component {

    renderScheduleItem(item){
        const location = item.googlePlace.formatted_address;
        //TODO: Make these respond to time correctly
        const textStyleBold = styles.textBoldFuture;
        const textStyleLight = styles.textLightFuture;
        return (
            <View style={styles.scheduleItemView} key={item._id}>
                <View style={styles.timeView}>
                    <Image style={styles.clock} source={require('./../../../../../static/images/icons/clock.png')}/>
                    <Text style={textStyleBold}>{moment(item.startTime).format("HH:mm")}</Text>
                </View>
                <View style={styles.descriptionView}>
                    <Text style={textStyleBold}>{location}</Text>
                    <Text style={textStyleLight}>{item.description ? item.description : ""}</Text>
                </View>
            </View>
        )
    }

    render(){
        const schedule = this.props.screenProps.event.schedule;
        return (
            <View style={styles.pageView}>
                <View style={styles.titleView}>
                    <Text style={styles.title}>Schedule</Text>
                </View>
                <View style={styles.scheduleView}>
                    {_.map(schedule,this.renderScheduleItem)}
                </View>
            </View>
        )
    }
}

const flexValues = {
    time: 2,
    description: 6
};

const styles = StyleSheet.create({
    pageView: {
        flex: 1,
        margin: 14,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    titleView: {
        alignSelf: 'flex-start',
    },
    title: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 8,
        color: styleGuide.colorPalette.whiteTwo
    },
    scheduleView: {
        marginTop: 12,
    },
    scheduleItemView: {
        height: 80,
        flexDirection: 'row'
    },
    timeView: {
        flex: flexValues.time,
        flexDirection: 'row',
        borderRightWidth: 1,
        borderRightColor: styleGuide.colorPalette.warmGrey,
        justifyContent: 'center',
        alignItems: 'center'
    },
    clock: {
        tintColor: styleGuide.colorPalette.warmGrey,
        width: 10,
        height: 10
    },
    descriptionView: {
        flex: flexValues.description,
        marginLeft: 14
    },
    textBoldFuture: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        color: styleGuide.colorPalette.warmGrey
    },
    textLightFuture: {
        fontFamily: 'Montserrat-Light',
        fontSize: 10,
        color: 'rgb(155,155,155)'
    }
});
