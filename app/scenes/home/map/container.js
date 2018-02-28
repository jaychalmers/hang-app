import React from 'react';
import Presenter from './presenter';
import post from '../../../services/api';

export default class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listView: false,
            awaitingServerResponse: true,
            events: null,
            error: null,
            selectedEventIndex: null,
            viewCoordinates: null,
        };
    }

    render() {
        return <Presenter/>
    }
}