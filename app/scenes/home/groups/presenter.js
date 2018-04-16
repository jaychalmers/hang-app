import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import {ModeButton} from './../common/components';
import {ListView} from './components';
import styleGuide from "../../../config/styles";

export default class GroupsPresenter extends React.Component {
    render(){
        const {
            discoverViewIsActive,
            setDiscoverViewIsActiveTo
        } = this.props;
        return (
            <View style={styles.component}>
                <View style={styles.titleView}>
                    <Text style={styles.title}>Groups</Text>
                </View>
                <View style={styles.buttonView}>
                    <Text style={styles.icon}></Text>
                    <ModeButton
                        title={"Discover"}
                        controller={()=>{setDiscoverViewIsActiveTo(true)}}
                        active={discoverViewIsActive}
                        fontSize={14}
                    />
                    <ModeButton
                        title={"Joined"}
                        controller={()=>{setDiscoverViewIsActiveTo(false)}}
                        active={!discoverViewIsActive}
                        fontSize={14}
                    />
                    <Text style={styles.icon}></Text>
                </View>
                <View style={styles.mainBodyView}>
                    {this.renderMainBody()}
                </View>
            </View>
        )
    }

    renderMainBody(){
        const {
            discoverViewIsActive,
        } = this.props;
        if (discoverViewIsActive){
            return this.renderListView("GROUP_DISCOVER");
        } else {
            return this.renderListView("GROUP_JOINED");
        }
    }

    renderListView = (type) => {
        const {
            navigateTo,
            joinedGroups,
            awaitingJoinedGroups,
            refreshJoined,
            discoverableGroups,
            awaitingDiscoverableGroups,
            refreshDiscoverable,
            joinGroup,
            leaveGroup,
            user
        } = this.props;
        if (type === "GROUP_DISCOVER"){
            return <ListView
                items={discoverableGroups}
                refresh={refreshDiscoverable}
                refreshing={awaitingDiscoverableGroups}
                onClick={joinGroup}
                type={type}
                user={user}
                navigateTo={navigateTo}
            />
        } else if (type === "GROUP_JOINED") {
            return <ListView
                items={joinedGroups}
                refresh={refreshJoined}
                refreshing={awaitingJoinedGroups}
                onClick={leaveGroup}
                type={type}
                user={user}
                navigateTo={navigateTo}
            />
        } else {
            throw new Error("Invalid type supplied to renderListView: " + type);
        }
    }
}


const styles = StyleSheet.create({
    component: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    titleView: {
        marginTop: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: styleGuide.colorPalette.uglyBlue,
        fontFamily: 'SignPainter-HouseScript',
        fontSize: 36
    },
    buttonView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        margin: 2
    },
    icon: {
        marginRight: 18,
        marginLeft: 18
    },
    mainBodyView: {
        flex: 6,
        alignSelf: 'stretch'
    }
});