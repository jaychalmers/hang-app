import React from 'react';
import {View,Text} from 'react-native';
import {MapView} from 'expo';
import * as _ from 'lodash';
import styleGuide from './../../../../../config/styles';

const selectedPinColor = styleGuide.colorPalette.reddishPink;
const unselectedPinColor = styleGuide.colorPalette.uglyBlue;

const brighton = {
    latitude: 50.8214826,
    longitude: -0.1373269,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05
};

export default class extends React.Component {
    constructor (props) {
        super(props);
        this.eventSelector = props.eventSelector;
        this.map = null;
        this.state = {
            view: null
        }
    }

    onMarkerPress = (e) => {
        e.stopPropagation();
        this.eventSelector(e.nativeEvent);
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
    };

    onMapPress = () => {
        this.eventSelector(null);
    };

    render(){
        const {events,selectedEventIndex,location} = this.props;
        const initialRegion = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02
        };
        return (
            <MapView
                style={mapViewStyle}
                intialRegion={initialRegion}
                ref={(mapView) => {this.map = mapView; }}
                showsCompass={false}
                moveOnMarkerPress={false}
                onPress={this.onMapPress}
                onLayout={() => this.map.animateToRegion(initialRegion,1000)}
            >
                {_.map(events,(event,index) => {
                    const long = event.schedule[0].googlePlace.geometry.location.lng;
                    const lat = event.schedule[0].googlePlace.geometry.location.lat;
                    const pinColor = (selectedEventIndex === index) ? selectedPinColor : unselectedPinColor;
                    return <MapView.Marker
                        key={event._id}
                        title={event.name}
                        coordinate={{longitude: long,latitude: lat}}
                        identifier={index.toString()}
                        pinColor={pinColor}
                        onPress={this.onMarkerPress}
                    >
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

const mapViewStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
};