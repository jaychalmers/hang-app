import {StyleSheet} from 'react-native';
import * as styleGuide from '../../../config/styleGuide';

const flexValues = {
    details: 1,
    description: 2,

    detailsLeft: 1,
    detailsRight: 6
};

const styles = StyleSheet.create({
    pageView: {
        flex: 1,
        flexDirection: 'column'
    },
    detailsView: {
        height: 114,
        padding: '8%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    detailsLeft: {
        flex: flexValues.detailsLeft,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: styleGuide.colorPalette.whiteTwo
    },
    detailsRight: {
        flex: flexValues.detailsRight,
        justifyContent: 'center',
        paddingLeft: 12
    },
    detailsRightLine: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    detailsRightIcon: {
        width: 10,
        height: 10,
        tintColor: styleGuide.colorPalette.whiteTwo
    },
    dateDay: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 24,
        color: styleGuide.colorPalette.warmGrey
    },
    dateMonth: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        color: 'rgb(255,0,0)'
    },
    dateDayOfWeek: {
        fontFamily: 'Montserrat-Light',
        fontSize: 16,
        color: styleGuide.colorPalette.warmGrey
    },
    detailsText: {
        fontFamily: "Montserrat-Regular",
        fontSize: 12,
        color: styleGuide.colorPalette.warmGrey,
        marginLeft: 4,
    },
    descriptionView: {
        flex: flexValues.description,
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    descriptionText: {
        marginLeft: '8%',
        marginRight: '8%',
        fontFamily: 'Montserrat-Light',
        fontSize: 11,
        color: styleGuide.colorPalette.warmGrey
    }
});

export {styles};