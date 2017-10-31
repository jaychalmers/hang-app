import {StyleSheet} from 'react-native';
import * as styleGuide from '../../../config/styleGuide';

const flexValues = {
    logo: 1
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
    }
});

export {styles};