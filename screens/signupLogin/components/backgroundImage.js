import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import * as styleGuide from './../config/styleGuide';

const styles = StyleSheet.create({
    //TODO: See if this can be improved
    bgImageContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
    },
    bgImage: {
        width: null,
        height: null,
        flex: 1
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        backgroundColor: styleGuide.colorPalette.uglyBlue,
        opacity: 0.65
    }
});

export default class BackgroundImage extends Component {
    render() {
        const image = this.props.source;
        return (
            <View style={styles.bgImageContainer}>
                <Image
                    style={styles.bgImage}
                    source={image}
                    resizeMode= 'cover'
                />
                <View style={styles.overlay}/>
            </View>
        );
    }
}