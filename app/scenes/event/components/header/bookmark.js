import React from 'react';
import {Image,StyleSheet} from 'react-native';
import styleGuide from "../../../../config/styles";

export default class extends React.Component {
    render(){
        const {
            saved
        } = this.props;
        if (saved) {
            return <Image
                style={styles.bookmarkSaved}
                source={require('./../../../../../static/images/icons/bookmark-black-shape.png')}
            />;
        } else {
            return <Image
                style={styles.bookmarkUnsaved}
                source={require('./../../../../../static/images/icons/bookmark-white.png')}
            />;
        }
    }
}

const styles = StyleSheet.create({
    bookmarkSaved: {
        width: 19,
        height: 19,
        tintColor: styleGuide.colorPalette.white,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowRadius: 0,
        shadowOffset: {width: 1, height: 4},
    },
    bookmarkUnsaved: {
        width: 19,
        height: 19,
        tintColor: styleGuide.colorPalette.white,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowRadius: 0,
        shadowOffset: {width: 0, height: 2},
    }
});