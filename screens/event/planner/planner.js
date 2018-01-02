import React from 'react';
import {Text,View,Image} from 'react-native';
import {tabBarIcon} from './../eventTabNavigator/style';
import {styles} from './style';
import * as _ from 'lodash';
const moment = require('moment');

class Planner extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Planner',
        tabBarIcon: ({ focused, tintColor }) => (
            <Image
                style={{tintColor: tintColor,...tabBarIcon}}
                source={require('./../../../static/images/icons/set-alarm.png')}/>
        )
    };

    constructor(props){
        super(props);
        this.state = {

        };
    }

    renderScheduleItem(item){
        const location = item.googlePlace.result.formatted_address;
        //TODO: Make these respond to time correctly
        const textStyleBold = styles.textBoldFuture;
        const textStyleLight = styles.textLightFuture;
        return (
            <View style={styles.scheduleItemView} key={item._id}>
                <View style={styles.timeView}>
                    <Image style={styles.clock} source={require('./../../../static/images/icons/clock.png')}/>
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
        const schedule = this.props.navigation.state.params.event.schedule;
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

export default Planner;