import {StyleSheet} from 'react-native';
import * as styleGuide from '../../../config/styleGuide';

const flexValues = {
    logo: 7,
    button: 3
};

const styles = StyleSheet.create({
    pageView: {
        flex: 1
    },
    foregroundView: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'column'
    },
    logo: {
        fontSize: 110,
        textAlign: "center",
        color: styleGuide.colorPalette.white,
        fontFamily: 'SignPainter-HouseScript',
        lineHeight: 180
    },
    logoView: {
        flex: flexValues.logo,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    buttonView: {
        flex: flexValues.button,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginButtonContainer: {
        width: 151,
        height: 29,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        marginBottom: 20,
        borderColor: styleGuide.colorPalette.white,
        borderRadius: 1,
        borderStyle: 'solid',
        borderWidth: 1
    },
    loginButtonText: {
        fontSize: 14,
        color: styleGuide.colorPalette.white,
        fontFamily: 'Montserrat-Light'
    },
    signupButtonContainer: {
        width: 151,
        height: 29,
        backgroundColor: styleGuide.colorPalette.reddishPink,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: styleGuide.colorPalette.reddishPink,
        borderRadius: 1,
        borderStyle: 'solid',
        borderWidth: 1
    },
    signupButtonText: {
        fontSize: 13,
        color: styleGuide.colorPalette.white,
        fontFamily: 'Montserrat-Regular'
    }
});

export {styles};