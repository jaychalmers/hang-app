import {StyleSheet} from 'react-native';
import * as styleGuide from '../../../config/styleGuide';

const flexValues = {
    header: 3,
    tabs: 7,
    footer: 1
};

const styles = StyleSheet.create({
    pageView: {
        flex: 1
    },
    headerView: {
        flex: flexValues.header
    },
    tabsView: {
        flex: flexValues.tabs
    },
    footerView: {
        flex: flexValues.footer,
        backgroundColor: styleGuide.colorPalette.prussianBlue
    }
});

export {styles};