import {StyleSheet} from 'react-native';
import * as styleGuide from '../../../../../config/styleGuide';

const styles = StyleSheet.create({
    sectionHeaderView: {
        height: 18,
        marginLeft: 14

    },
    sectionHeaderText: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        color: styleGuide.colorPalette.whiteTwo
    }
});

export {styles};