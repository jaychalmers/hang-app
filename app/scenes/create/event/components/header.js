import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
import styleGuide from './../../../../config/styles';

export default class extends React.Component {
    render(){
        return (
            <View style={styles.header}>
                <Text style={styles.text}>Choose or upload a photo</Text>
                <Image
                    source={require('./../../../../../static/images/icons/down-arrow-inside-circle.png')}
                    style={styles.image}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 112,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '10%',
        paddingRight: '10%',
        backgroundColor: styleGuide.colorPalette.uglyBlue
    },
    text: {
        fontFamily: 'Montserrat-Light',
        fontSize: 12,
        color: 'white'
    },
    image: {
        height: 24,
        width: 24,
        tintColor: 'white',
        transform: [{rotate: '270deg'}]
    }
});