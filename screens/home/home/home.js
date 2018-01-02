import React from 'react';
import {Text,View,Image,Slider,TouchableHighlight,FlatList,Alert} from 'react-native';
import {styles} from './style';
import {tabBarIcon} from './../homeNavigator/style';
import Button from 'react-native-button';
import * as server from './../../../config/server';
import * as _ from 'lodash';
import * as styleGuide from '../../../config/styleGuide';
import HangMap from './../../../components/hangMap';
import MapEventCallout from "../../../components/mapEventCallout/mapEventCallout";
const moment = require('moment');

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
        const {navigate} = this.props.navigation;
        const time = moment(event.schedule[0].startTime);
        const location = event.schedule[0].googlePlace.result.name + ", " + _.find(event.schedule[0].googlePlace.result.address_components,(component)=>{
            return _.includes(component.types,"postal_town");
        }).long_name;
        return (
            <TouchableHighlight onPress={()=>navigate('Event',{event: event})}>
                <View>
                    <View style={{height: 88,flex: 1,flexDirection:'row',justifyContent: 'center',alignItems: 'center'}}>
                        <View style={{flex: 1,flexDirection:'column',alignItems:'center',marginRight:12}}>
                            <Text style={{fontSize:36,fontFamily:'Montserrat-Regular',color:styleGuide.colorPalette.warmGrey}}>{time.format("DD")}</Text>
                            <Text style={{fontSize:18,fontFamily:'Montserrat-Light',color:'red'}}>{time.format("MMM")}</Text>
                            <Text style={{fontSize:12,fontFamily:'Montserrat-Regular',color:styleGuide.colorPalette.warmGrey}}>Free</Text>
                        </View>
                        <View style={{flex: 4, flexDirection: 'column',justifyContent: 'space-around'}}>
                            <View style={{flex: 5,justifyContent: 'flex-end'}}>
                                <Text style={{fontSize:18,fontFamily: 'Montserrat-Regular'}}>{event.name}</Text>
                            </View>
                            <View style={{flex: 3, flexDirection: 'row', alignItems: 'center'}}>
                                <Image style={{width: 9, height: 9, tintColor: styleGuide.colorPalette.warmGrey, opacity: 0.5}} source={require('./../../../static/images/icons/pin.png')}/>
                                <Text style={{fontSize:12,fontFamily: 'Montserrat-Light',color:styleGuide.colorPalette.warmGrey,marginLeft: 2}}>{location}</Text>
                                <Image style={{width: 9, height: 9, tintColor: styleGuide.colorPalette.warmGrey, opacity: 0.5,marginLeft: 14}} source={require('./../../../static/images/icons/clock.png')}/>
                                <Text style={{fontSize:12,fontFamily: 'Montserrat-Light',color:styleGuide.colorPalette.warmGrey,marginLeft: 2}}>{time.format("h:mm a")}</Text>
                            </View>
                            <View style={{flex: 5}}>
                                <Text style={{fontSize:12,fontFamily: 'Montserrat-Regular',color:styleGuide.colorPalette.warmGrey}}>10 Going</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{height: 1, width: '88%',backgroundColor: styleGuide.colorPalette.whiteTwo, opacity: 0.5}}/>
                </View>
            </TouchableHighlight>
        );
    }

    renderList(){
        //TODO: Render in chronological order.
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
                }}
                showsVerticalScrollIndicator={false}
            />
        }
    }

    timeout(ms, promise){
        return new Promise(function(resolve,reject) {
            setTimeout(function() {
                reject(new Error("timeout"))
            }, ms)
        });
        promise.then(resolve, reject);
    }

    fetchWrapper(url, options, timeout) {
        return new Promise((resolve, reject) => {
            fetch(url, options).then(resolve).catch(reject);
            if (timeout) {
                const e = new Error("Connection timed out");
                setTimeout(reject, timeout, e);
            }
        });
    };

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
        this.fetchWrapper(address,req,5000)
            .then((res) => res.json())
            .then((json) => {
                this.setState({awaitingServerResponse: false, events: json});
            }).catch((err) => {
                this.loadExampleEvents();
            });
        /*
        fetch(address,req)
            .then((res) => res.json())
            .then((json) => {
                this.setState({awaitingServerResponse: false, events: json});
            }).catch((err) => {
                //this.setState({awaitingServerResponse: false, error: err});
                //TODO: Switch this back for production
                this.loadExampleEvents();
        });*/
    }

    loadExampleEvents(){
        this.setState({events: require('./../../../static/exampleEvents.json'),awaitingServerResponse: false});
        Alert.alert(
            "Server Error",
            "Failed to contact the server. Loading example events.",
            [
                {text: "No problemo my dude", onPress: () => {}}
            ],
            { cancelable: false }
        )
    }

    render(){
        return (
            <View style={styles.pageView}>
                <View style={styles.foregroundView}>
                    <View style={styles.mapView}>
                        <HangMap
                            events={this.state.events}
                            selector={(event)=>{
                                this.setState({selectedEventIndex: event ? parseInt(event.id) : null});
                            }}
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
                    {this.state.listOpen ?
                        null : this.state.selectedEventIndex === null ?
                            <Slider style={styles.slider}/> : <MapEventCallout event={this.state.events[this.state.selectedEventIndex]} navigation={this.props.navigation}/>
                    }
                </View>
            </View>
        )
    }
}

export default Home;