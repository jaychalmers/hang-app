import {StyleSheet} from 'react-native';
import * as styleGuide from '../../../config/styleGuide';

const flexValues = {
    logo: 1,
    modeButtons: 1,
    mapSpacer: 5,
    slider: 1
};

const buttonTextValues = {
    fontSize: 14,
    fontFamily: 'Montserrat-Light'
};

const buttonContainerValues = {
    width: 75,
    height: 27,
    justifyContent: 'center',
    alignItems: 'center',
    margin: '6%',
    borderColor: styleGuide.colorPalette.prussianBlue,
    borderRadius: 4,
    borderStyle: 'solid',
    borderWidth: 2
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
        flex: flexValues.logo,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    logo: {
        fontSize: 48,
        textAlign: "center",
        color: styleGuide.colorPalette.prussianBlue,
        fontFamily: 'SignPainter-HouseScript',
        lineHeight: 64,
        textShadowColor: 'rgba(0,0,0,0.5)',
        textShadowOffset: {width: 0, height: 2},
        textShadowRadius: 4
    },
    settingsIcon: {
        marginLeft: 21,
        marginRight: 21,
        width: 25,
        height: 25,
        tintColor: styleGuide.colorPalette.prussianBlue
    },
    modeButtonsView: {
        flex: flexValues.modeButtons,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    activeButtonContainer: {
        ...buttonContainerValues,
        backgroundColor: styleGuide.colorPalette.prussianBlue
    },
    activeButtonText: {
        ...buttonTextValues,
        color: styleGuide.colorPalette.white
    },
    inactiveButtonContainer: {
        ...buttonContainerValues,
        backgroundColor: 'transparent'
    },
    inactiveButtonText: {
        ...buttonTextValues,
        color: styleGuide.colorPalette.prussianBlue
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
    },
    slider: {

    }
});

export {styles};