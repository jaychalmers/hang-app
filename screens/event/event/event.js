import React from 'react';
import {Text,View,Image} from 'react-native';
import {styles} from './style';
import EventTabNavigator from './../eventTabNavigator/eventTabNavigator';

class Event extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        };
    }

    componentDidMount(){
    }

    render(){
        const event = this.props.navigation.state.params.event;
        return (
            <View style={styles.pageView}>
                <View style={styles.headerView}>
                    <View style={styles.bgImageContainer}>
                        <Image
                            style={styles.bgImage}
                            source={require('./../../../static/images/background/eventPlaceholder.png')}
                            resizeMode= 'cover'
                        />
                        <View style={styles.overlay}/>
                    </View>
                    <Text style={styles.headerEventName}>{event.name}</Text>
                    <View style={styles.attendance}></View>
                </View>
                <View style={styles.tabsView}>
                    <EventTabNavigator navigation={this.props.navigation}/>
                </View>
                <View style={styles.footerView}>
                    <Text>footer here</Text>
                </View>
            </View>
        )
    }
}
Event.router = EventTabNavigator.router;

export default Event;