import React from 'react';
import Presenter from './presenter';
import {get} from './../../services/api';
const forEach = require('lodash/forEach');
const findIndex = require('lodash/findIndex');
const values = require('lodash/values');
const join = require('lodash/join');

export default class GroupContainer extends React.Component {

    static navigationOptions = {
        gesturesEnabled: true
    };

    constructor(props) {
        super(props);
        this.groupID = this.props.navigation.state.params.groupID;
        this.state = {
            group: null,
            error: null,
            members: null,
            events: null
        }
    }

    //using componentDidMount instead of componentWillMount prevents
    //setState() being called on the unmounted component
    componentDidMount(){
        this.getGroup();
        this.getEvents();
    }

    render(){
        const navigation = this.props.navigation;
        return <Presenter
            navigation={navigation}
            {...this.state}
        />
    }

    /* Container methods - Anything that the view doesn't need to interact with */
    getGroup = async () => {
        try {
            const group = await get(`/groups/${this.groupID}`);
            this.setState({
                group: group
            });
            this.getRest();
        } catch (e) {
            this.setState({
                error: e
            })
        }
    };

    getRest = () => {
        this.getPhoto();
        this.getMembers();
    };

    getPhoto = async () => {
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
    };

    getMembers = async () => {
        try {
            const promises = this.state.group.members.map(async (member) => {
                return get(`users/${member}`);
            });
            Promise.all(promises).then((members) => {
                this.setState({
                    members: members
                },()=>{this.getMemberPhotos()});
            });
        } catch (e) {
            console.log("Error retrieving members");
        }
    };

    getMemberPhotos = async () => {
        try {
            const members = this.state.members;
            forEach(members, async (member) => {
                const json = await get(`users/photo/${member._id}`);
                //Photo arrives as an object with a value for each character, ie {0:d,1:a,2:t,3:a,etc...}
                const photo = join(values(json.photo),"");
                const index = findIndex(this.state.members, (m) => {return m._id === member._id});
                members[index].photo = photo;
                this.setState({
                    members: members
                });
            });
        } catch (e) {
            console.log("Error retrieving member photos");
        }
    };

    getEvents = async () => {
        try {
            const events = await get(`events/byGroup/${this.groupID}`);
            this.setState({
                events: events
            });
        } catch (e) {
            console.log("Error retrieving group events");
        }
    }
}