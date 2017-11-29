import React from 'react';
import {View,Image,StyleSheet} from 'react-native';
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

class HangMap extends React.Component {

    constructor(props){
        super(props);
        console.log(props);
        this.selector = props.selector;
        this.state = {
            view: {
                latitude: 50.8214826,
                longitude: -0.1373269,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05
            },
            selectedEvent: null,
        };
        this.map = null;
    }

    onMarkerPress(e){
        console.log("Clicked: " + JSON.stringify(e.nativeEvent));
        //this.selector(e.nativeEvent);
        this.setState({selectedEvent: e.nativeEvent.id});
        if(this.map){
            this.map.animateToRegion({
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }, 1000);
        }
    }

    render(){
        console.log("Rendering mapview. selectedEvent: " + this.state.selectedEvent);
        return (
            <MapView
                style={{
                    width: null,
                    height: null,
                    flex: 1
                }}
                initialRegion={this.state.view}
                ref={(mapView) => {this.map = mapView; }}
                showsCompass={false}
                moveOnMarkerPress={false}
            >
                {_.map(this.props.events,(event, index) => {
                    let styles = StyleSheet.create({
                        marker: {...pinStyle,
                            tintColor: (this.state.selectedEvent === index) ? styleGuide.colorPalette.reddishPink : styleGuide.colorPalette.uglyBlue}
                    });
                    return <MapView.Marker
                        title={event.name}
                        description={event.description}
                        coordinate={{
                            longitude: event.location[0],
                            latitude: event.location[1]
                        }}
                        identifier={index.toString()}
                        onPress={this.onMarkerPress.bind(this)}>
                        <View>
                            <Image
                                source={pin}
                                style={styles.marker}
                            />
                        </View>
                    </MapView.Marker>
                })}
            </MapView>
        )
    }
}

export default HangMap;