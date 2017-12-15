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
                source={require('./../../../static/images/icons/info.png')}/>
        )
    };

    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        const event = this.props.navigation.state.params.event;
        const location = _.truncate(event.googlePlace.result.formatted_address,{length: 36,omission:"... (view map)"});
        return (
            <View style={styles.pageView}>
                <View style={styles.detailsView}>
                    <View style={styles.detailsLeft}>
                        <Text style={styles.dateDay}>{moment(event.startTime).format("DD")}</Text>
                        <Text style={styles.dateMonth}>{moment(event.startTime).format("MMM")}</Text>
                        <Text style={styles.dateDayOfWeek}>{moment(event.startTime).format("ddd")}</Text>
                    </View>
                    <View style={styles.detailsRight}>
                        <View style={styles.detailsRightLine}>
                            <Image style={styles.detailsRightIcon} source={require('./../../../static/images/icons/pin.png')}/>
                            <Text style={styles.detailsText}>{location}</Text>
                        </View>
                        <View style={styles.detailsRightLine}>
                            <Image style={styles.detailsRightIcon} source={require('./../../../static/images/icons/clock.png')}/>
                            <Text style={styles.detailsText}>{moment(event.startTime).format("HH:mm") + " - " + moment(event.endTime).format("HH:mm")}</Text>
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