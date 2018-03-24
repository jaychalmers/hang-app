import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import {ModeButton} from './../common/components';
import {ListView} from './components';
import styleGuide from './../../../config/styles';

export default class EventsPresenter extends React.Component {
    render(){
        const {
            createdViewIsActive,
            setCreatedViewIsActiveTo,
        } = this.props;
        return (
            <View style={styles.component}>
                <View style={styles.titleView}>
                    <Text style={styles.title}>Events</Text>
                </View>
                <View style={styles.buttonView}>
                    <Text style={styles.icon}>#</Text>
                    <ModeButton
                        title={"Attending"}
                        controller={()=>{setCreatedViewIsActiveTo(false)}}
                        active={!createdViewIsActive}
                        fontSize={14}
                    />
                    <ModeButton
                        title={"Created"}
                        controller={()=>{setCreatedViewIsActiveTo(true)}}
                        active={createdViewIsActive}
                        fontSize={14}
                    />
                    <Text style={styles.icon}>@</Text>
                </View>
                <View style={styles.mainBodyView}>
                    {this.renderMainBody()}
                </View>
            </View>
        )
    }

    renderMainBody(){
        const {
            createdViewIsActive,
            listViewIsActive,
        } = this.props;
        if (createdViewIsActive){
            if (listViewIsActive){
                return this.renderListView("EVENT_CREATED");
            } else {
                //gridview, created events
            }
        } else {
            if (listViewIsActive){
                return this.renderListView("EVENT_ATTENDED");
            } else {
                //gridview, attended events
            }
        }
    }

    renderListView = (type) => {
        const {
            createdEvents,
            awaitingCreatedEvents,
            attendedEvents,
            awaitingAttendedEvents,
            changeAttendingStatus,
            deleteEvent,
            refreshCreated,
            refreshAttended,
            user
        } = this.props;
        if (type === "EVENT_CREATED"){
            return <ListView
                items={createdEvents}
                refresh={refreshCreated}
                refreshing={awaitingCreatedEvents}
                onClick={deleteEvent}
                type={type}
                user={user}
            />
        } else if (type === "EVENT_ATTENDED") {
            return <ListView
                items={attendedEvents}
                refresh={refreshAttended}
                refreshing={awaitingAttendedEvents}
                onClick={changeAttendingStatus}
                type={type}
                user={user}
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