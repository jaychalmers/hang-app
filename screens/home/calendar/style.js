import {StyleSheet} from 'react-native';
import * as styleGuide from '../../../config/styleGuide';

const flexValues = {
    logo: 1,
    quickButtons: 1,
    dateDisplay: 1,
    datePicker: 4,
    okButton: 1
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
        alignItems: 'center',
        marginLeft: '5%',
        marginRight: '5%'
    },
    logoView: {
        flex: flexValues.logo,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    quickButtonsView: {
        flex: flexValues.quickButtons,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dateDisplayView: {
        flex: flexValues.dateDisplay,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    datePickerView: {
        flex: flexValues.datePicker,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    okButtonView: {
        flex: flexValues.okButton,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    okButtonContainer: {
        width: 151,
        height: 29,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: styleGuide.colorPalette.white,
        borderRadius: 1,
        borderStyle: 'solid',
        borderWidth: 1
    },
    okButtonText: {
        fontSize: 14,
        fontFamily: 'Montserrat-Light',
        color: styleGuide.colorPalette.white
    }
});

export {styles};