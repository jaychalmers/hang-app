import React from 'react';
import {View,Image,StyleSheet,Text} from 'react-native';
const moment = require('moment');
import { MapView } from 'expo';
import * as _ from 'lodash';
import * as styleGuide from './../config/styleGuide';

const pin = require('./../static/images/icons/pin.png');
const pinStyle = {
    width: 42,
    height: 42,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 0
};

const Brighton = {
    latitude: 50.8214826,
    longitude: -0.1373269,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05
};
const InitialRegion = Brighton;

class HangMap extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
        this.selector = props.selector;
        this.state = {
            view: null,
            selectedEvent: null,
        };
        this.map = null;
    }

    onMarkerPress(e){
        this.selector(e.nativeEvent);
        this.setState({selectedEvent: e.nativeEvent.id});
        if(this.map){
            //TODO: This doesn't work - need to make it so if you're zoomed in further than 0.01, it doesn't zoom out
            const latDelt = (this.latitudeDelta < 0.01) ? this.latitudeDelta : 0.01;
            const lonDelt = (this.longitudeDelta < 0.01) ? this.longitudeDelta : 0.01;
            this.map.animateToRegion({
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
                latitudeDelta: latDelt,
                longitudeDelta: lonDelt
            }, 1000);
        }
    }

    render(){
        return (
            <MapView
                style={{
                    width: null,
                    height: null,
                    flex: 1
                }}
                initialRegion={InitialRegion}
                ref={(mapView) => {this.map = mapView; }}
                showsCompass={false}
                moveOnMarkerPress={false}
                onPress={()=>{
                    this.setState({selectedEvent: null});
                    this.selector(null);
                }}
                onLayout={() => this.map.animateToRegion(InitialRegion,1000)}
            >
                {_.map(this.props.events,(event, index) => {
                    return <MapView.Marker
                        title={event.name}
                        coordinate={{
                            longitude: event.location[0],
                            latitude: event.location[1]
                        }}
                        pinColor={(this.state.selectedEvent == index) ? styleGuide.colorPalette.reddishPink : styleGuide.colorPalette.uglyBlue}
                        identifier={index.toString()}
                        onPress={(event) => {event.stopPropagation(); this.onMarkerPress(event)}}>
                            <MapView.Callout tooltip={true}>
                                <View>
                                    <Text/>
                                </View>
                            </MapView.Callout>
                    </MapView.Marker>
                })}
            </MapView>
        )
    }
}

export default HangMap;