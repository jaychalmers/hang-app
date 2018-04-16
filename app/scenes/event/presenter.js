import React from 'react';
import {View,Text,StyleSheet,Alert} from 'react-native';
import {Header,EventNavigator,Footer} from './components';
import LoadingScreen from './../common/loadingScreen';
import * as _ from 'lodash';
import {convertPrice} from './../../lib/string';
import styleGuide from "./../../config/styles";

export default class EventPresenter extends React.Component {

    componentDidUpdate(){
        if (this.props.error) {
            Alert.alert(
                'Error',
                'There was a problem loading the event. Please try again later.',
                [{text: 'OK',onPress: this.props.navigateBack}]
            )
        }
    }

    render(){
        const {
            event,
            user,
            distance,
            navigateBack,
            navigateHome,
            bookmark,
            bookmarked,
            attendees,
            setAttendingTo,
        } = this.props;
        if (!event) {
            return (
                <LoadingScreen/>
            )
        } else {
            const userIsAttending = _.includes(event.attending,user.id);
            return (
                <View style={styles.pageView}>
                    <View style={styles.headerView}>
                        <Header
                            title={event.name}
                            distance={distance}
                            attendance={event.attending.length}
                            price={convertPrice(event.price)}
                            navigateBack={navigateBack}
                            navigateHome={navigateHome}
                            image={event.photo}
                            bookmarked={bookmarked}
                            bookmark={bookmark}
                        />
                    </View>
                    <View style={styles.tabsView}>
                        <EventNavigator
                            event={event}
                            attendees={attendees}
                        />
                    </View>
                    <View style={styles.footerView}>
                        <Footer
                            attending={userIsAttending}
                            setAttendingTo={setAttendingTo}
                        />
                    </View>
                </View>
            )
        }
    }
}

const flexValues = {
    header: 3,
    tabs: 7,
    footer: 1
};

const styles = StyleSheet.create({
    pageView: {
        flex: 1
    },
    headerView: {
        flex: flexValues.header
    },
    tabsView: {
        flex: flexValues.tabs
    },
    footerView: {
        flex: flexValues.footer,
        backgroundColor: styleGuide.colorPalette.prussianBlue
    }
});