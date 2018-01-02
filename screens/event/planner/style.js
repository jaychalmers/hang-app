import {StyleSheet} from 'react-native';
import * as styleGuide from '../../../config/styleGuide';

const flexValues = {
    time: 2,
    description: 6
};

const styles = StyleSheet.create({
    pageView: {
        flex: 1,
        margin: 14,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    titleView: {
        alignSelf: 'flex-start',
    },
    title: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 8,
        color: styleGuide.colorPalette.whiteTwo
    },
    scheduleView: {
        marginTop: 12,
    },
    scheduleItemView: {
        height: 80,
        flexDirection: 'row'
    },
    timeView: {
        flex: flexValues.time,
        flexDirection: 'row',
        borderRightWidth: 1,
        borderRightColor: styleGuide.colorPalette.warmGrey,
        justifyContent: 'center',
        alignItems: 'center'
    },
    clock: {
        tintColor: styleGuide.colorPalette.warmGrey,
        width: 10,
        height: 10
    },
    descriptionView: {
        flex: flexValues.description,
        marginLeft: 14
    },
    textBoldFuture: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        color: styleGuide.colorPalette.warmGrey
    },
    textLightFuture: {
        fontFamily: 'Montserrat-Light',
        fontSize: 10,
        color: 'rgb(155,155,155)'
    }
});

export {styles};