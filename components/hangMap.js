import React from 'react';
import {Text,View,Image,Slider,TouchableHighlight,ScrollView,FlatList} from 'react-native';
const moment = require('moment');
import { MapView } from 'expo';
import * as _ from 'lodash';

class HangMap extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    onMarkerPress(event){
        console.log(event.nativeEvent);
    }

    render(){
        return (
            <MapView
                style={{
                    width: null,
                    height: null,
                    flex: 1
                }}
                initialRegion={{
                    latitude: 50.8214826,
                    longitude: -0.1373269,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05
                }}>
                {_.map(this.props.events,(event, index) => {
                    return (<MapView.Marker
                        title={event.name}
                        description={event.description}
                        coordinate={{
                            longitude: event.location[0],
                            latitude: event.location[1]
                        }}
                    />)
                })}
            </MapView>
        )
    }
}

export default HangMap;