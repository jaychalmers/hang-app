import {StyleSheet} from 'react-native';
import * as styleGuide from '../../../../../config/styleGuide';

const flexValues = {
    leftSide: 1,
    rightSide: 5,
    bottomRightDetails: 5,
    bottomRightButtons: 3
};

//TODO: The image goes beyond the bounds of the card view. This doesn't display properly on Android.
const styles = StyleSheet.create({
    card: {
        backgroundColor: styleGuide.colorPalette.white,
        width: 327,
        height: 117,
        borderRadius: 6,
        shadowColor: 'rgb(0,0,0)',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 4,
        shadowOpacity: 0.5,
        position: 'absolute',
        bottom: 67
    },
    cardContent: {
        position: 'relative',
        flex: 1,
        flexDirection: 'row',
        padding: 10
    },
    leftColumn: {
        flex: flexValues.leftSide,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imageView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 3
    },
    dateView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    dateDay: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 28,
        color: styleGuide.colorPalette.warmGrey
    },
    dateMonth: {
        fontFamily: 'Montserrat-Light',
        fontSize: 14,
        color: 'red',
        lineHeight: 14,
    },
    rightColumn: {
        flex: flexValues.rightSide,
        flexDirection: 'column',
        alignItems: 'stretch',
        marginLeft: 12,
        justifyContent: 'space-between',
    },
    rightTop: {
        flex: 1,
        justifyContent: 'flex-start',
        marginRight: 40,
    },
    eventName: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 18,
        color: 'black'
    },
    eventDescription: {
        fontFamily: 'Montserrat-Light',
        fontSize: 10,
        color: styleGuide.colorPalette.warmGrey
    },
    rightBottom: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    bottomDetails: {
        flex: flexValues.bottomRightDetails
    },
    eventLocation: {
        fontFamily: 'Montserrat-Light',
        fontSize: 12,
        color: styleGuide.colorPalette.warmGrey
    },
    eventTime: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        color: 'red'
    },
    bottomButtons: {
        flex: flexValues.bottomRightButtons,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    eventPrice: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        color: styleGuide.colorPalette.warmGrey
    },
    eventAttendance: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        color: styleGuide.colorPalette.warmGrey
    }
});

export {styles};