import React from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';
import Button from 'react-native-button';
import styleGuide from "./../../../../../config/styles";

export default class extends React.Component {

    render(){
        const {
            onPress,
            attending
        } = this.props;
        if (attending) {
            return (
                <View style={styles.buttonView}>
                    <Button
                        onPress={onPress}
                        containerStyle={styles.attendingButtonContainer}
                        style={styles.attendingButtonText}
                    >
                        cancel
                    </Button>
                    <View style={styles.tickView}>
                        <Image
                            style={styles.attendanceTick}
                            source={require('./../../../../../../static/images/icons/checked.png')}
                        />
                    </View>
                </View>
            )
        } else {
            return (
                <View style={styles.buttonView}>
                    <Button
                        onPress={onPress}
                        containerStyle={styles.notAttendingButtonContainer}
                        style={styles.notAttendingButtonText}
                    >
                        Going
                    </Button>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    buttonView: {
        width: 80,
        height: 24
    },
    buttonView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
    },
    attendingButtonContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: styleGuide.colorPalette.reddishPink,
        borderRightWidth: 1,
        borderRightColor: 'white',
    },
    attendingButtonText: {
        fontSize: 10,
        fontFamily: 'Montserrat-Regular',
        color: styleGuide.colorPalette.white,
    },
    tickView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: styleGuide.colorPalette.reddishPink,
    },
    attendanceTick: {
        width: 10,
        height: 10,
        tintColor: 'white',
    },
    notAttendingButtonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: styleGuide.colorPalette.white,
        borderColor: styleGuide.colorPalette.reddishPink,
        borderRadius: 2,
        borderStyle: 'solid',
        borderWidth: 2,
    },
    notAttendingButtonText: {
        fontSize: 10,
        fontFamily: 'Montserrat-Regular',
        color: styleGuide.colorPalette.reddishPink
    }
});