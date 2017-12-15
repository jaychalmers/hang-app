import {StyleSheet} from 'react-native';
import * as styleGuide from '../../config/styleGuide';

//TODO: The image goes beyond the bounds of the card view. This doesn't display properly on Android.
const styles = StyleSheet.create({
    card: {
        backgroundColor: styleGuide.colorPalette.white,
        alignItems: 'center',
        width: 327,
        height: 117,
        borderRadius: 6,
        shadowColor: 'rgba(0,0,0)',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 4,
        shadowOpacity: 0.5,
        position: 'absolute',
        bottom: 67,
        overflow: 'visible',
    },
    cardContent: {
        position: 'relative',
        flex: 1,
        flexDirection: 'row',
    },
    imageView: {
        height: 80,
        width: 80,
        borderRadius: 40,
        position: 'absolute',
        top: -40,
        right: 123
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 40
    },
    leftSection: {
        position: 'relative',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightSection: {
        position: 'relative',
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    attendance: {
        flex: 2,
        position: 'relative',
        alignSelf: 'flex-end',
        marginRight: 13,
        marginTop: 13
    },
    details: {
        alignSelf: 'flex-start',
        flex: 4,
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    eventCost: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        color: styleGuide.colorPalette.warmGrey,
        marginBottom: 9
    },
    eventDate: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 36,
        color: styleGuide.colorPalette.warmGrey
    },
    eventMonth: {
        fontFamily: 'Montserrat-Light',
        fontSize: 18,
        color: 'rgb(255,0,0)'
    },
    eventName: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 18,
        textAlign: 'left'
    },
    eventLocation: {
        fontFamily: 'Montserrat-Light',
        fontSize: 12,
        color: styleGuide.colorPalette.warmGrey,
        textAlign: 'left'
    },
    eventTime: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        color: 'rgb(255,0,0)',
        textAlign: 'left'
    },
    eventAttendanceCount: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        color: styleGuide.colorPalette.warmGrey,
        textAlign: 'right',
        position: 'absolute',
        bottom: 10,
        right: 13
    }
});

export {styles};