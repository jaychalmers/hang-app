import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
const moment = require('moment');
import { MapView } from 'expo';
import {styles} from './style';
import Button from 'react-native-button';

class MapEventCallout extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        const event = this.props.event;
        return (
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <Image style={styles.image} source={require('./../static/images/placeholderEvent.png')}/>
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
                            <Text style={styles.eventLocation}>Location</Text>
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