import React from 'react';
import {Text,View,Image} from 'react-native';
import {tabBarIcon} from './../eventTabNavigator/style';
import {styles} from './style';
const moment = require(('moment'));
import * as _ from 'lodash';

class Description extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Description',
        tabBarIcon: ({ focused, tintColor }) => (
            <Image
                style={{tintColor: tintColor,...tabBarIcon}}
                source={require('./../../../static/images/icons/list.png')}/>
        )
    };

    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        const event = this.props.navigation.state.params.event;
        const eventStartTime = event.schedule[0].startTime;
        const eventEndTime = _.last(event.schedule).endTime;
        const location = _.truncate(event.schedule[0].googlePlace.result.formatted_address,{length: 36,omission:"... (view map)"});
        return (
            <View style={styles.pageView}>
                <View style={styles.detailsView}>
                    <View style={styles.detailsLeft}>
                        <Text style={styles.dateDay}>{moment(eventStartTime).format("DD")}</Text>
                        <Text style={styles.dateMonth}>{moment(eventStartTime).format("MMM")}</Text>
                        <Text style={styles.dateDayOfWeek}>{moment(eventStartTime).format("ddd")}</Text>
                    </View>
                    <View style={styles.detailsRight}>
                        <View style={styles.detailsRightLine}>
                            <Image style={styles.detailsRightIcon} source={require('./../../../static/images/icons/pin.png')}/>
                            <Text style={styles.detailsText}>{location}</Text>
                        </View>
                        <View style={styles.detailsRightLine}>
                            <Image style={styles.detailsRightIcon} source={require('./../../../static/images/icons/clock.png')}/>
                            <Text style={styles.detailsText}>{moment(eventStartTime).format("HH:mm") + " - " + moment(eventEndTime).format("HH:mm")}</Text>
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

export default Description;