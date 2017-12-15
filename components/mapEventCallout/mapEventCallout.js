import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
const moment = require('moment');
import { MapView } from 'expo';
import {styles} from './style';
import * as _ from 'lodash';

class MapEventCallout extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        const event = this.props.event;
        const location = event.googlePlace.result.name + ", " + _.find(event.googlePlace.result.address_components,(component)=>{
            return _.includes(component.types,"postal_town");
        }).long_name;
        return (
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <View style={styles.imageView}>
                        <Image style={styles.image} source={require('./../../static/images/placeholderEvent.png')}/>
                    </View>
                    <View style={styles.leftSection}>
                        <Text style={styles.eventCost}>Free</Text>
                        <Text style={styles.eventDate}>{moment(event.time).format("D")}</Text>
                        <Text style={styles.eventMonth}>{moment(event.time).format("MMM")}</Text>
                    </View>
                    <View style={styles.rightSection}>
                        <View style={styles.attendance}>
                            <Text>Attendance</Text>
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.eventName}>{event.name}</Text>
                            <Text style={styles.eventLocation}>{(location.length < 40) ? location : _.truncate(location,{length: 40})}</Text>
                            <Text style={styles.eventTime}>{moment(event.time).format("H:mm a")}</Text>
                        </View>
                        <Text style={styles.eventAttendanceCount}>0 Attending</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default MapEventCallout;