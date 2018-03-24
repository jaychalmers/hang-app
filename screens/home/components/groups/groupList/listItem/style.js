import {StyleSheet} from 'react-native';
import * as styleGuide from '../../../../../../config/styleGuide';

const flexValues = {
};

const styles = StyleSheet.create({
    itemView: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        margin: 12
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 2
    },
    details: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        marginLeft: 12
    },
    groupName: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        color: styleGuide.colorPalette.warmGrey
    },
    description: {
        fontFamily: 'Montserrat-Light',
        fontSize: 10,
        color: styleGuide.colorPalette.warmGrey
    },
    joinButtonContainer: {
        width: 74,
        height: 19,
        borderRadius: 1,
        borderWidth: 1,
        borderColor: styleGuide.colorPalette.reddishPink
    },
    joinButtonText: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 13,
        color: styleGuide.colorPalette.reddishPink
    }
});

export {styles};