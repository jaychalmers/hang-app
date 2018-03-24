import React from 'react';
import {View,Text,ActivityIndicator,Alert,StyleSheet,StatusBar} from 'react-native';
import {HangMap,ListView,EventCallout} from './components';
import LoadingScreen from './../../common/loadingScreen';
import {ModeButton} from './../common/components';
import styleGuide from './../../../config/styles';

export default class MapPresenter extends React.Component {

    componentDidUpdate(){
        if (this.props.error) {
            Alert.alert(
                'Error',
                'There was a problem loading the events. Please try again later.',
                [{text: 'OK'}]
            )
        }
    }

    render(){
        const {
            awaitingServerResponse,
            events,
            eventSelector,
            selectedEventIndex,
            setListViewTo,
            listViewIsActive,
            navigateTo,
            refresh,
            location,
            locationLoaded
        } = this.props;
        return (
            //this first view is necessary just to wrap the statusbar component
            <View style={{flex: 1}}>
                <StatusBar barStyle={"dark-content"} hidden={false}/>
                {locationLoaded ?
                <View style={styles.pageView}>
                    <HangMap
                        location={location}
                        events={events}
                        eventSelector={eventSelector}
                        selectedEventIndex={selectedEventIndex}
                    />
                    {listViewIsActive ?
                        <ListView
                            events={events}
                            navigateTo={navigateTo}
                            refresh={refresh}
                            awaitingServerResponse={awaitingServerResponse}
                        /> : null
                    }
                    <View style={styles.logoView}>
                        <Text style={styles.logo}>Hang</Text>
                    </View>
                    <View style={styles.modeButtonsView}>
                        <ModeButton
                            title={"Map"}
                            controller={()=>setListViewTo(false)}
                            active={!listViewIsActive}
                        />
                        <ModeButton
                            title={"List"}
                            controller={()=>setListViewTo(true)}
                            active={listViewIsActive}
                        />
                    </View>
                    {this.renderBody()}
                </View> : <LoadingScreen/>}
            </View>
        )
    }

    renderBody = () => {
        const {
            listViewIsActive,
            events,
            user,
            selectedEventIndex,
            awaitingServerResponse,
            navigateTo,
            setAttendingTo
        } = this.props;
        if (awaitingServerResponse) {
            return (
                <View style={styles.largeSpacerView}>
                    <ActivityIndicator/>
                </View>
            )
        } else if (listViewIsActive || (selectedEventIndex === null)) {
            return <View style={styles.largeSpacerView}/>
        } else {
            return ([
                <View style={styles.smallSpacerView} key={"spacer"}/>,
                <View style={styles.cardContainerView} key={"calloutContainer"}>
                    <EventCallout
                        event={events[selectedEventIndex]}
                        user={user}
                        navigateTo={navigateTo}
                        setAttendingTo={setAttendingTo}
                    />
                </View>
            ]);
        }
    }
}

const flexValues = {
    logo: 1,
    modeButtons: 1,
    largeMapSpacer: 7,
    smallMapSpacer: 4,
    cardContainer: 3
};

const styles = StyleSheet.create({
    pageView: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    logoView: {
        flex: flexValues.logo,
        marginTop: '1%'
    },
    logo: {
        fontSize: 48,
        textAlign: "center",
        color: styleGuide.colorPalette.prussianBlue,
        fontFamily: 'SignPainter-HouseScript',
        lineHeight: 72,
        textShadowColor: 'rgba(0,0,0,0.5)',
        textShadowOffset: {width: 0, height: 2},
        textShadowRadius: 4
    },
    modeButtonsView: {
        flex: flexValues.modeButtons,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    smallSpacerView: {
        flex: flexValues.smallMapSpacer,
        alignSelf: 'center',
        width: 0,
    },
    cardContainerView: {
        flex: flexValues.cardContainer,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    largeSpacerView: {
        flex: flexValues.largeMapSpacer,
        alignItems: 'center',
        justifyContent: 'center'
    },
});