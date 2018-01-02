import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
import AttendanceButton from './attendanceButton/attendanceButton';
const moment = require('moment');
import { MapView } from 'expo';
import {styles} from './style';
import * as _ from 'lodash';

class MapEventCallout extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            attending: false
        };
    }

    render(){
        const {navigate} = this.props.navigation;
        const event = this.props.event;
        const eventStartTime = event.schedule[0].startTime;
        const location = event.schedule[0].googlePlace.result.name + ", " + _.find(event.schedule[0].googlePlace.result.address_components,(component)=>{
            return _.includes(component.types,"postal_town");
        }).long_name;
        const price = "Free";
        return (
            <TouchableOpacity style={styles.card} onPress={() => navigate('Event',{event: event})}>
                <View style={styles.cardContent}>
                    <View style={styles.leftColumn}>
                        <View style={styles.imageView}>
                            <Image style={styles.image} source={require('./../../static/images/placeholderEvent.png')}/>
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
                                <Text style={styles.eventAttendance}>0 Going</Text>
                                <AttendanceButton
                                    onPress={(attending) => {this.setState({attending: attending})}}
                                    attending={this.state.attending}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

export default MapEventCallout;

/*

<TouchableOpacity style={styles.card} onPress={() => navigate('Event',{event: event})}>
                <View style={styles.cardContent}>
                    <View style={styles.topRow}>
                        <View style={styles.imageView}>
                            <Image style={styles.image} source={require('./../../static/images/placeholderEvent.png')}/>
                        </View>
                        <View style={styles.topDetailsView}>
                            <Text style={styles.eventName}>{event.name}</Text>
                            <Text style={styles.eventDescription}>{event.description}</Text>
                        </View>
                    </View>
                    <View style={styles.bottomRow}>
                        <View style={styles.dateView}>
                            <Text style={styles.dateDay}>{moment(event.startTime).format("DD")}</Text>
                            <Text style={styles.dateMonth}>{moment(event.startTime).format("MMM")}</Text>
                        </View>
                        <View style={styles.bottomDetailsView}>
                            <Text>{location}</Text>
                            <Text>{moment(event.startTime).format("hh:mm a")}</Text>
                        </View>
                        <View style={styles.bottomButtonsView}>
                            <Text>Price</Text>
                            <Text>Attendance</Text>
                            <Text>Going button</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>



 */