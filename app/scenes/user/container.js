import React from 'react';
import Presenter from './presenter';
import {get} from './../../services/api';

export default class extends React.Component {

    static navigationOptions = {
        gesturesEnabled: true
    };

    constructor(props) {
        super(props);
        this.userID = this.props.navigation.state.params.userID;
        this.state = {
            event: null,
            error: null
        }
    }

    componentWillMount(){
        this.getUser();
    }

    render(){
        return <Presenter {...this.state}/>
    }

    /* Container methods - Anything that the view doesn't need to interact with */
    async getUser(){
        try {
            const user = await get(`/users/${this.userID}`);
            this.setState({
                user: user
            })
        } catch (e) {
            this.setState({
                error: e
            })
        }
    }
}