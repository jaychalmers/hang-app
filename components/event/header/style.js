import {StyleSheet} from 'react-native';
import * as styleGuide from '../../../config/styleGuide';

const flexValues = {
    top: 1,
    middle: 2,
    bottom: 1
};

const styles = StyleSheet.create({
    headerView: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    topView: {
        flex: flexValues.top,
        width: '92%',
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    midView: {
        flex: flexValues.middle,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomView: {
        flex: flexValues.bottom,
        width: '86%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bgImageContainer: {
        alignSelf: 'flex-start',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
    },
    bgImage: {
        width: null,
        height: null,
        flex: 1
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        backgroundColor: styleGuide.colorPalette.uglyBlue,
        opacity: 0.65
    },
    backButton: {
        width: 23,
        height: 23,
        tintColor: styleGuide.colorPalette.white,
    },
    homeButton: {
        width: 19,
        height: 19,
        tintColor: styleGuide.colorPalette.white
    },
    eventName: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 20,
        color: styleGuide.colorPalette.white,
        backgroundColor: 'transparent',
    },
    attendance: {
        fontFamily: 'Montserrat-Light',
        fontSize: 10,
        color: styleGuide.colorPalette.white,
        backgroundColor: 'transparent'
    },
    bookmarkSaved: {
        width: 19,
        height: 19,
        tintColor: styleGuide.colorPalette.white,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowRadius: 0,
        shadowOffset: {width: 1, height: 4},
    },
    bookmarkUnsaved: {
        width: 19,
        height: 19,
        tintColor: styleGuide.colorPalette.white,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowRadius: 0,
        shadowOffset: {width: 0, height: 2},
    }
});

export {styles};