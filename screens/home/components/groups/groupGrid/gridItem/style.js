import {StyleSheet} from 'react-native';
import * as styleGuide from '../../../../../../config/styleGuide';

const styles = StyleSheet.create({
    itemView: {
        width: "33%",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 2,
    },
    groupName: {
        flex: 1,
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        color: styleGuide.colorPalette.warmGrey
    },
    memberCount: {
        flex: 1,
        fontFamily: 'Montserrat-Light',
        fontSize: 10,
        color: styleGuide.colorPalette.warmGrey
    }
});

export {styles};