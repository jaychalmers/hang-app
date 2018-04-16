import React from 'react';
import {Image,TouchableOpacity,StyleSheet} from 'react-native';
import styleGuide from "../../../../config/styles";

export default class extends React.Component {
    render(){
        const {
            bookmarked,
            bookmark
        } = this.props;
        if (bookmarked) {
            return (
                <TouchableOpacity
                    onPress={() => bookmark(false)}
                    style={styles.component}>
                    <Image
                        style={styles.bookmarkSaved}
                        source={require('./../../../../../static/images/icons/bookmark-black-shape.png')}
                    />
                </TouchableOpacity>
            );
        } else {
            return (
                <TouchableOpacity
                    onPress={() => bookmark(true)}
                    style={styles.component}>
                    <Image
                        style={styles.bookmarkUnsaved}
                        source={require('./../../../../../static/images/icons/bookmark-white.png')}
                    />
                </TouchableOpacity>
            );
        }
    }
}

const styles = StyleSheet.create({
    component: {
        width: 19,
        height: 19
    },
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