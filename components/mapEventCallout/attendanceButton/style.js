import {StyleSheet} from 'react-native';
import * as styleGuide from './../../../config/styleGuide';

//TODO: The image goes beyond the bounds of the card view. This doesn't display properly on Android.
const styles = StyleSheet.create({
    buttonView: {
        width: 80,
        height: 24
    },
    attendingView: {
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

export {styles};