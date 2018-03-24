import {StyleSheet} from 'react-native';
import * as styleGuide from '../../../../config/styleGuide';

const styles = StyleSheet.create({
    footerView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    optionLeft: {
        flex: 1,
        width: 65,
        alignItems: 'center'
    },
    optionMiddle: {
        flex: 3,
        alignItems: 'center'
    },
    optionText: {
        fontFamily: 'Montserrat-Light',
        color: styleGuide.colorPalette.white,
        fontSize: 12,
    },
    optionRight: {
        flex: 1,
        alignItems: 'center'
    },
    optionRightHidden: {
        width: 0,
        alignItems: 'center'
    },
    cross: {
        width: 20,
        height: 20,
        tintColor: styleGuide.colorPalette.white,
    },
    tick: {
        width: 23,
        height: 23,
        tintColor: styleGuide.colorPalette.white
    }
});

export {styles};