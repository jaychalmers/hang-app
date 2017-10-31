import {StyleSheet} from 'react-native';
import * as styleGuide from '../../../config/styleGuide';

const flexValues = {
    logo: 2,
    textFields: 3,
    loginButton: 1,
    or: 1,
    socialButtons: 2,
    forgottenPassword: 1
};

const textBoxStyles = {
    tintColor: styleGuide.colorPalette.white,
    textColor: styleGuide.colorPalette.white,
    baseColor: "rgba(255,255,255,0.6)"
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

    textFieldView: {
        flex: flexValues.textFields,
        flexDirection: 'column',
        width: 264
    },

    loginButtonView: {
        flex: flexValues.loginButton
    },
    loginButtonContainer: {
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
    loginButtonText: {
        fontSize: 14,
        color: styleGuide.colorPalette.white,
        fontFamily: "Montserrat-Regular"
    },

    orView: {
        flex: flexValues.or
    },
    or: {
        color: styleGuide.colorPalette.white
    },

    socialView: {
        flex: flexValues.socialButtons
    },
    facebookButtonContainer: {
        marginBottom: 28,
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
    },

    forgottenButtonView: {
        flex: flexValues.forgottenPassword
    },
    forgottenButtonContainer: {
        flex: 1
    },
    forgottenButtonText: {
        fontSize: 10,
        color: styleGuide.colorPalette.white,
        fontFamily: 'Montserrat-Light'
    }
});

export {styles,textBoxStyles};