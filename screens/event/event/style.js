import {StyleSheet} from 'react-native';
import * as styleGuide from '../../../config/styleGuide';

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
        flex: flexValues.header,
        flexDirection: 'column',
        alignItems: 'center'
    },
    headerEventName: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 20,
        color: styleGuide.colorPalette.white,
        backgroundColor: 'transparent',
        marginTop: 64
    },
    bgImageContainer: {
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
    tabsView: {
        flex: flexValues.tabs
    },
    footerView: {
        flex: flexValues.footer,
        backgroundColor: styleGuide.colorPalette.prussianBlue
    }
});

export {styles};