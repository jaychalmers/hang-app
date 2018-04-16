import React from 'react';
import {View,TouchableOpacity,Text,Image,StyleSheet} from 'react-native';
import styleGuide from './../../../../config/styles';

export default class extends React.Component {
    render(){
        const {imagePicker,image} = this.props;
        console.log("Image: " + image);
        return (
            <TouchableOpacity style={styles.header} onPress={() => {imagePicker()}}>
                {image ? <Image
                    style={styles.bgImage}
                    source={{uri: image}}
                    resizeMode='cover'
                /> : null}
                <View style={styles.foreground}>
                    <Text style={styles.text}>{image ? null : "Choose or upload a photo"}</Text>
                    <Image
                        source={require('./../../../../../static/images/icons/down-arrow-inside-circle.png')}
                        style={styles.icon}
                    />
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 112,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: styleGuide.colorPalette.uglyBlue
    },
    foreground: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '10%',
        paddingRight: '10%',
    },
    text: {
        fontFamily: 'Montserrat-Light',
        fontSize: 12,
        color: 'white'
    },
    icon: {
        height: 24,
        width: 24,
        tintColor: 'white',
        transform: [{rotate: '270deg'}]
    },
    bgImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
    }
});