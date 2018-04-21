import React from 'react';
import Presenter from './presenter';
import {get,post} from '../../../services/api';
import {navigateToGroup} from "../../../lib/leafNavigation";
const filter = require('lodash/filter');
const forEach = require('lodash/forEach');
const findIndex = require('lodash/findIndex');

export default class GroupsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            discoverableGroups: null,
            joinedGroups: null,
            awaitingDiscoverableGroups: true,
            awaitingJoinedGroups: true,
            error: null,
            discoverViewIsActive: true,
        };
    }

    componentWillMount(){
        this.getDiscoverableGroups();
        this.getJoinedGroups();
    }

    render() {
        const {user} = this.props.screenProps;
        return <Presenter
            setDiscoverViewIsActiveTo={this.setDiscoverViewIsActiveTo}
            refreshDiscoverable={this.refreshDiscoverable}
            refreshJoined={this.refreshJoined}
            leaveGroup={this.leaveGroup}
            joinGroup={this.joinGroup}
            user={user}
            navigateTo={this.navigateToGroup}
            {...this.state}
        />
    }

    /*Container methods. Anything that view won't interact with*/
    getDiscoverableGroups = async () => {
        const user = this.props.screenProps.user;
        try {
            const groups = await get(`/groups/byDiscoverable/${user.id}`);
            this.setState({
                discoverableGroups: groups,
                awaitingDiscoverableGroups: false
            });
            this.getPhotosForGroups("discoverableGroups");
        } catch (e) {
            this.setState({
                error: e,
                awaitingDiscoverableGroups: false
            });
        }
    };

    getJoinedGroups = async () => {
        const user = this.props.screenProps.user;
        try {
            const groups = await get(`/groups/byUser/${user.id}`);
            this.setState({
                joinedGroups: groups,
                awaitingJoinedGroups: false
            });
            this.getPhotosForGroups("joinedGroups");
        } catch (e) {
            this.setState({
                error: e,
                awaitingJoinedGroups: false
            });
        }
    };

    getPhotosForGroups = (category) => {
        if (category !== "discoverableGroups" && category !== "joinedGroups"){
            console.log("Invalid category supplied to getPhotosForGroups:" + category);
            throw new Error("Invalid category supplied to getPhotosForGroups:" + category);
        }
        const groups = this.state[category];
        forEach(groups, async (group) => {
            const json = await get(`groups/photo/${group._id}`);
            const photo = json.photo;
            const index = findIndex(this.state[category],(g) => {return g._id === group._id});
            groups[index].photo = photo;
            this.setState({
                [category]: groups
            });
        });
    };

    /*Interface methods - Button controllers etc */
    setDiscoverViewIsActiveTo = (bool) => {
        this.setState({discoverViewIsActive: bool});
    };

    refreshDiscoverable = () => {
        this.setState({awaitingDiscoverableGroups: true});
        this.getDiscoverableGroups();
    };

    refreshJoined = () => {
        this.setState({awaitingJoinedGroups: true});
        this.getJoinedGroups();
    };

    joinGroup = async (id) => {
        const options = {
            group: id,
            user: this.props.screenProps.user.id
        };
        try {
            const result = await post(`/groups/join`,options);
            let groups = this.state.discoverableGroups;
            this.setState({
                discoverableGroups: filter(groups,(g) => {
                    return g._id !== id;
                })
            });
            this.getJoinedGroups();
        } catch (e) {
            console.log(e);
        }
    };

    leaveGroup = async (id) => {
        const options = {
            group: id,
            user: this.props.screenProps.user.id
        };
        try {
            const result = await post('/groups/leave',options);
            let groups = this.state.joinedGroups;
            this.setState({
                joinedGroups: filter(groups,(g) => {
                    return g._id !== id;
                })
            });
            this.getDiscoverableGroups();
        } catch (e) {
            console.log(e);
        }
    };

    navigateToGroup = (id) => {
        const {mainNavigation} = this.props.screenProps;
        if (id) {
            console.log("Navigate to group " + id);
            navigateToGroup(mainNavigation,id);
        } else {
            console.log(`Invalid groupID ${id}`);
        }
    };
}