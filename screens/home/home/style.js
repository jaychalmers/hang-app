import {StyleSheet} from 'react-native';
import * as styleGuide from '../../../config/styleGuide';

const flexValues = {
    logo: 1,
    modeButtons: 1,
    mapSpacer: 5,
    slider: 1
};

const styles = StyleSheet.create({
    pageView: {
        flex: 1
    },
    foregroundView: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    mapView: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
        /*
        backgroundColor: 'red',
        flexDirection: 'column',
        justifyContent: 'space-around'
        */
    },
    listView: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: styleGuide.colorPalette.white,
        opacity: 0.8,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    logoView: {
        backgroundColor: 'green',
        flex: flexValues.logo,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    modeButtonsView: {
        flex: flexValues.modeButtons,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    activeButtonContainer: {
        width: 98,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: styleGuide.colorPalette.prussianBlue,
        margin: 6,
        borderColor: styleGuide.colorPalette.prussianBlue,
        borderRadius: 4,
        borderStyle: 'solid',
        borderWidth: 2
    },
    activeButtonText: {
        fontSize: 18,
        color: styleGuide.colorPalette.white,
        fontFamily: 'Montserrat-Light'
    },
    inactiveButtonContainer: {
        width: 98,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        margin: 6,
        borderColor: styleGuide.colorPalette.prussianBlue,
        borderRadius: 4,
        borderStyle: 'solid',
        borderWidth: 2
    },
    inactiveButtonText: {
        fontSize: 18,
        color: styleGuide.colorPalette.prussianBlue,
        fontFamily: 'Montserrat-Light'
    },
    spacerView: {
        flex: flexValues.mapSpacer
    },
    sliderView: {
        backgroundColor: 'yellow',
        flex: flexValues.slider,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
});

export {styles};