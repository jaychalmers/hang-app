import React from 'react';
import Presenter from './presenter';
import {get} from './../../services/api';

export default class extends React.Component {

    static navigationOptions = {
        gesturesEnabled: true
    };

    constructor(props) {
        super(props);
        this.groupID = this.props.navigation.state.params.groupID;
        this.state = {
            group: null,
            error: null
        }
    }

    componentWillMount(){
        this.getGroup();
    }

    render(){
        return <Presenter
            navigation={this.props.navigation}
            {...this.state}
        />
    }

    /* Container methods - Anything that the view doesn't need to interact with */
    async getGroup(){
        try {
            const group = await get(`/groups/${this.groupID}`);
            this.setState({
                group: group
            });
            this.getPhoto();
        } catch (e) {
            this.setState({
                error: e
            })
        }
    }

    async getPhoto(){
        try {
            const photo = await get(`/groups/photo/${this.groupID}`);
            const group = this.state.group;
            group.photo = photo.photo;
            this.setState({
                group: group
            });
        } catch (e) {
            this.setState({
                error: e
            });
        }
    }
}