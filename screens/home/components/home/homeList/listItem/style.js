import {StyleSheet} from 'react-native';
import * as styleGuide from '../../../../../../config/styleGuide';

const flexValues = {
};

const styles = StyleSheet.create({
    itemView: {
        height: 88,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    leftView: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: 12
    },
    dateDayOfMonth: {
        fontSize:36,
        fontFamily:'Montserrat-Regular',
        color:styleGuide.colorPalette.warmGrey
    },
    dateMonth: {
        fontSize:18,
        fontFamily:'Montserrat-Light',
        color:'red'
    },
    price: {
        fontSize:12,
        fontFamily:'Montserrat-Regular',
        color:styleGuide.colorPalette.warmGrey
    },
    rightView: {
        flex: 4,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    nameView: {
        flex: 5,
        justifyContent: 'flex-end'
    },
    name: {
        fontSize:18,
        fontFamily: 'Montserrat-Regular'
    },
    detailsView: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center'
    },
    detailsIcon: {
        width: 9,
        height: 9,
        tintColor: styleGuide.colorPalette.warmGrey,
        opacity: 0.5
    },
    detailsText: {
        fontSize:12,
        fontFamily: 'Montserrat-Light',
        color:styleGuide.colorPalette.warmGrey,
        marginLeft: 2,
        marginRight: 12
    },
    attendanceView: {
        flex: 5
    },
    attendanceText: {
        fontSize:12,fontFamily: 'Montserrat-Regular',color:styleGuide.colorPalette.warmGrey
    },
    separator: {
        height: 1,
        width: '88%',
        backgroundColor: styleGuide.colorPalette.whiteTwo,
        opacity: 0.5
    }
});

export {styles};