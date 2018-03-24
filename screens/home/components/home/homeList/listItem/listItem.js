import React from 'react';
import {View,Text,StyleSheet,Image,TouchableHighlight} from 'react-native';
import {styles} from './style';
import * as _ from 'lodash';
const moment = require('moment');

class ListItem extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        //TODO: Implement attendance
        const navigate = this.props.navigate;
        const event = this.props.item;
        const time = moment(event.schedule[0].startTime);
        const location = event.schedule[0].googlePlace.result.name + ", " + _.find(event.schedule[0].googlePlace.result.address_components,(component)=>{
            return _.includes(component.types,"postal_town");
        }).long_name;
        const price = (event.price > 0) ? ("£" + event.price.toString()) : "Free";
        return (
            <TouchableHighlight onPress={()=>navigate('Event',{event: event})}>
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
                                <Text style={styles.attendanceText}>10 Going</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.separator}/>
                </View>
            </TouchableHighlight>
        )
    }
}

export default ListItem;