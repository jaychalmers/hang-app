import React from 'react';
import Presenter from './presenter';
import post from '../../../services/api';

export default class GroupsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return <Presenter/>
    }
}