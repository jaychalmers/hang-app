import {StyleSheet} from 'react-native';
import * as styleGuide from '../../../../../config/styleGuide';

const styles = StyleSheet.create({
    listView: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: styleGuide.colorPalette.white,
        opacity: 0.9,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    listHeadSpacer: {
        flex: 1,
    },
    listContentView: {
        flex: 3,
        width: '86%',
        height: '100%'
    }
});

export {styles};