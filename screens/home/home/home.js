import React from 'react';
import {Text,View,Image,Slider,TouchableHighlight,FlatList,Alert} from 'react-native';
import {styles} from './style';
import {tabBarIcon} from './../homeNavigator/style';
import Button from 'react-native-button';
import * as server from './../../../config/server';
import HangMap from '../components/home/hangMap';
import HomeList from '../components/home/homeList/homeList';
import MapEventCallout from '../components/home/mapEventCallout/mapEventCallout';

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
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.pageView}>
                <View style={styles.mapView}>
                    <HangMap
                        events={this.state.events}
                        selector={(event)=>{
                            this.setState({selectedEventIndex: event ? parseInt(event.id) : null});
                        }}
                        selectedEventIndex={this.state.selectedEventId}
                    />
                </View>
                {this.state.listOpen ?
                    <HomeList
                        awaitingServerResponse={this.state.awaitingServerResponse}
                        events={this.state.events}
                        error={this.state.error}
                        navigate={navigate}
                    /> : null
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
                    null : this.state.selectedEventId === null ?
                        null : <MapEventCallout
                            event={this.state.events[this.state.selectedEventId]}
                            navigation={this.props.navigation}
                            user={this.props.navigation.state.params.user}
                        />
                }
            </View>
        )
    }
}

export default Home;