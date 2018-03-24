import React from 'react';
import {Text,View,Image} from 'react-native';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import {styles} from './style';
import EventTabNavigator from './../eventTabNavigator/eventTabNavigator';
const includes = require('lodash/includes');

class Event extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            attending: this.isUserAttending()
        };
        this.event = this.props.navigation.state.params.event;
        this.user = this.props.navigation.state.params.user;
    }

    isUserAttending(){
        return includes(this.event.attending,this.user);
    }

    //IE, change from attending to not attending or vice versa
    changeAttendance(){
        const address = (server.url + "/event/setUserAttendance");
        fetch(){

        }
    }

    render(){
        const event = this.props.navigation.state.params.event;
        const navigation = this.props.navigation;
        return (
            <View style={styles.pageView}>
                <View style={styles.headerView}>
                    <Header
                        event={this.event}
                        navigation={navigation}
                        attending={this.state.attending}
                    />
                </View>
                <View style={styles.tabsView}>
                    <EventTabNavigator navigation={navigation}/>
                </View>
                <View style={styles.footerView}>
                    <Footer/>
                </View>
            </View>
        )
    }
}
Event.router = EventTabNavigator.router;

export default Event;