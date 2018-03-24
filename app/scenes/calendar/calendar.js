import React from 'react';
import {Text,View} from 'react-native';
import {styles} from './style';
import BackgroundImage from '../../components/backgroundImage';
import Button from 'react-native-button';
import {NavigationActions} from 'react-navigation';

//TODO: Everything
class Calendar extends React.Component {
    render() {
        return (
            <View style={styles.pageView}>
                <BackgroundImage source={require('./../../../static/images/background/calendar.png')}/>
                <View style={styles.foregroundView}>
                    <View style={styles.logoView}>
                        <Text>This will be the logo and back button.</Text>
                    </View>
                    <View style={styles.quickButtonsView}>
                        <Text>Today</Text>
                        <Text>Tomorrow</Text>
                        <Text>Weekend</Text>
                    </View>
                    <View style={styles.dateDisplayView}>
                        <Text>Day Month</Text>
                        <Text>Year</Text>
                    </View>
                    <View style={styles.datePickerView}>
                        <Text>This will be the date picker</Text>
                    </View>
                    <View style={styles.okButtonView}>
                        <Button
                            onPress={() => {
                                this.props.navigation.dispatch(
                                    NavigationActions.setParams({
                                        params: {},
                                        key: 'Home'
                                    })
                                );
                                this.props.navigation.dispatch(
                                    NavigationActions.back({
                                        key: null
                                    })
                                );
                            }}
                            containerStyle={styles.okButtonContainer}
                            style={styles.okButtonText}>
                            OK
                        </Button>
                    </View>
                </View>
            </View>
        )
    }
}

export default Calendar;