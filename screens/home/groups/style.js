import {StyleSheet} from 'react-native';
import * as styleGuide from '../../../config/styleGuide';

const flexValues = {
    logo: 1,
    modeButtons: 1,
    content: 6
};

const buttonTextValues = {
    fontSize: 14,
    fontFamily: 'Montserrat-Light'
};

const buttonContainerValues = {
    width: 98,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1%',
    borderColor: styleGuide.colorPalette.uglyBlue,
    borderRadius: 4,
    borderStyle: 'solid',
    borderWidth: 2,
};

const styles = StyleSheet.create({
    pageView: {
        flex: 1,
        backgroundColor: styleGuide.colorPalette.white
    },
    logoView: {
        flex: flexValues.logo,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 18
    },
    logo: {
        fontSize: 36,
        textAlign: "center",
        color: styleGuide.colorPalette.prussianBlue,
        fontFamily: 'SignPainter-HouseScript',
        lineHeight: 40,/*
        textShadowColor: 'rgba(0,0,0,0.5)',
        textShadowOffset: {width: 0, height: 2},
        textShadowRadius: 4*/
    },
    buttonView: {
        flex: flexValues.modeButtons,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconView: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 19,
        height: 19,
        tintColor: styleGuide.colorPalette.whiteTwo,
    },
    activeButtonContainer: {
        ...buttonContainerValues,
        backgroundColor: styleGuide.colorPalette.uglyBlue
    },
    activeButtonText: {
        ...buttonTextValues,
        color: styleGuide.colorPalette.white
    },
    inactiveButtonContainer: {
        ...buttonContainerValues,
        backgroundColor: 'transparent',
    },
    inactiveButtonText: {
        ...buttonTextValues,
        color: styleGuide.colorPalette.uglyBlue
    },
    contentView: {
        flex: flexValues.content,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export {styles};