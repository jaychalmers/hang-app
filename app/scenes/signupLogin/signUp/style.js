import {StyleSheet} from 'react-native';
import styleGuide from './../../../config/styles';

const flexValues = {
    logo: 2,
    forms: 3,
    signupButton: 1,
    or: 1,
    socialButtons: 2
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

    logoView: {
        flex: flexValues.logo
    },
    logo: {
        marginTop: 57,
        fontSize: 64,
        lineHeight: 96,
        textAlign: "center",
        color: styleGuide.colorPalette.white,
        fontFamily: 'SignPainter-HouseScript'
    },
    formView: {
        flex: flexValues.forms,
        flexDirection: 'column',
        width: '72%',
    },
    signupButtonView: {
        flex: flexValues.signupButton
    },
    signupButtonContainer: {
        width: 151,
        height: 29,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderColor: styleGuide.colorPalette.white,
        borderRadius: 1,
        borderStyle: 'solid',
        borderWidth: 1
    },
    signupButtonText: {
        fontSize: 14,
        color: styleGuide.colorPalette.white,
        fontFamily: "Montserrat-Light"
    },
    orView: {
        flex: flexValues.or
    },
    or: {
        color: styleGuide.colorPalette.white,
        fontFamily: "Montserrat-Light",
        fontSize: 10
    },
    socialButtonsView: {
        flex: flexValues.socialButtons
    },
    facebookButtonContainer: {
        marginBottom: 14,
        width: 151,
        height: 29,
        backgroundColor: '#3b5998',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#3b5998',
        borderRadius: 1,
        borderStyle: 'solid',
        borderWidth: 1
    },
    googleButtonContainer: {
        width: 151,
        height: 29,
        backgroundColor: '#d84b37',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#d84b37',
        borderRadius: 1,
        borderStyle: 'solid',
        borderWidth: 1
    },
    socialButtonText: {
        fontSize: 10,
        color: styleGuide.colorPalette.white,
        fontFamily: 'Montserrat-Light'
    }
});

const formFieldStyle = {
    tintColor: styleGuide.colorPalette.white,
    textColor: styleGuide.colorPalette.white,
    baseColor: "rgba(255,255,255,0.6)",
    fontSize: 12, //actual text input
    titleFontSize: 10, //floating text
    labelFontSize: 10, //placeholder text
    labelHeight: 24
};

export {styles,formFieldStyle};