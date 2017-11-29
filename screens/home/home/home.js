import React from 'react';
import {Text,View,Image,Slider,TouchableHighlight,ScrollView,FlatList} from 'react-native';
import {styles} from './style';
import {tabBarIcon} from './../homeNavigator/style';
import Button from 'react-native-button';
import * as server from './../../../config/server';
const moment = require('moment');
import { MapView } from 'expo';
import * as styleGuide from '../../../config/styleGuide';
import HangMap from './../../../components/hangMap';

class Home extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused, tintColor }) => (
            <Image
                style={{tintColor: tintColor,...tabBarIcon}}
                source={require('./../../../static/images/icons/home.png')}/>
        )
    };

    constructor(props){
        super(props);
        this.state = {
            listOpen: false,
            awaitingServerResponse: true,
            events: null,
            error: null,
            selectedEventIndex: null,
            viewCoordinates: null
        };
    }

    componentDidMount(){
        this.getEvents();
    }

    renderButtons(){
        if (this.state.listOpen) {
            return (
                <View style={styles.modeButtonsView}>
                    <Button
                        onPress={() => {this.setState({listOpen: false});}}
                        containerStyle={styles.inactiveButtonContainer}
                        style={styles.inactiveButtonText}>
                        Map
                    </Button>
                    <Button
                        onPress={() => {this.setState({listOpen: true});}}
                        containerStyle={styles.activeButtonContainer}
                        style={styles.activeButtonText}>
                        List
                    </Button>
                </View>
            );
        } else {
            return (
                <View style={styles.modeButtonsView}>
                    <Button
                        onPress={() => {this.setState({listOpen: false});}}
                        containerStyle={styles.activeButtonContainer}
                        style={styles.activeButtonText}>
                        Map
                    </Button>
                    <Button
                        onPress={() => {this.setState({listOpen: true});}}
                        containerStyle={styles.inactiveButtonContainer}
                        style={styles.inactiveButtonText}>
                        List
                    </Button>
                </View>
            );
        }
    }

    renderEventOnList(event){
        const time = moment(event.time);
        return (
            <View style={{height: 88,flex: 1,flexDirection:'row',justifyContent: 'center',alignItems: 'center'}}>
                <View style={{flex: 1,flexDirection:'column',alignItems:'center',marginRight:12}}>
                    <Text style={{fontSize:36,fontFamily:'Montserrat-Regular',color:styleGuide.colorPalette.warmGrey}}>{time.format("DD")}</Text>
                    <Text style={{fontSize:18,fontFamily:'Montserrat-Light',color:'red'}}>{time.format("MMM")}</Text>
                    <Text style={{fontSize:12,fontFamily:'Montserrat-Regular',color:styleGuide.colorPalette.warmGrey}}>Free</Text>
                </View>
                <View style={{flex: 4}}>
                    <Text style={{fontSize:18,fontFamily: 'Montserrat-Regular'}}>{event.name}</Text>
                    <Text style={{fontSize:12,fontFamily: 'Montserrat-Light',color:styleGuide.colorPalette.warmGrey}}>Location and Time</Text>
                    <Text style={{fontSize:12,fontFamily: 'Montserrat-Regular',color:styleGuide.colorPalette.warmGrey}}>10 Going</Text>
                </View>
            </View>
        );
    }

    renderList(){
        if (this.state.error) {
            console.log(this.state.error);
            return <Text>Error contacting server</Text>
        } else {
            const events = this.state.events;
            return <FlatList
                data={events}
                renderItem={({item}) => this.renderEventOnList(item)}
                keyExtractor={(item, index) => {
                    return item._id;
                }}/>
        }
    }

    getEvents(options){
        const address = (server.url + "/event/");
        const req = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(options)
        };
        fetch(address,req)
            .then((res) => res.json())
            .then((json) => {
                this.setState({awaitingServerResponse: false, events: json});
            }).catch((err) => {
                this.setState({awaitingServerResponse: false, error: err});
        });
    }

    selectMarker(event){
        console.log("Home received event: " + event);
        console.log("id:: " + event.id);
        this.setState({selectedEventIndex: parseInt(event.id)});
    }

    render(){
        return (
            <View style={styles.pageView}>
                <View style={styles.mapView}>

                </View>
                <View style={styles.foregroundView}>
                    <View style={styles.mapView}>
                        <HangMap
                            events={this.state.events}
                            selector={this.selectMarker.bind(this)}
                            selectedEventIndex={this.state.selectedEventIndex}
                        />
                    </View>
                    {this.state.listOpen ?
                        <View style={styles.listView}>
                            <View style={styles.listHeadSpacer}/>
                            <View style={styles.listContentView}>
                                {!this.state.awaitingServerResponse ? this.renderList() : (<Text>Waiting for response from server</Text>)}
                            </View>
                        </View> : null
                    }
                    <View style={styles.logoView}>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Calendar')}>
                            <Image style={styles.settingsIcon} source={require("./../../../static/images/icons/calendar.png")}/>
                        </TouchableHighlight>
                        <Text style={styles.logo}>Hang</Text>
                        <Image style={styles.settingsIcon} source={require("./../../../static/images/icons/musica-searcher.png")}/>
                    </View>
                    {this.renderButtons()}
                    <View style={styles.spacerView}/>
                    <View style={styles.sliderView}>
                        {this.state.listOpen ?
                            null : <Slider
                                style={styles.slider}
                            />
                        }
                    </View>
                </View>
            </View>
        )
    }
}

export default Home;