import React from 'react';
import {Text,View,Image} from 'react-native';
import Header from './../../../components/event/header/header';
import Footer from './../../../components/event/footer/footer';
import {styles} from './style';
import EventTabNavigator from './../eventTabNavigator/eventTabNavigator';
import * as _ from 'lodash';

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
        const navigation = this.props.navigation;
        return (
            <View style={styles.pageView}>
                <View style={styles.headerView}>
                    <Header event={event} navigation={navigation}/>
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