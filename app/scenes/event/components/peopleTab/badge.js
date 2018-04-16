import React from 'react';
import {Text,View,Image,StyleSheet,ActivityIndicator} from 'react-native';
import styleGuide from './../../../../config/styles';
import {capitalizeWords} from "../../../../lib/string";

export default class extends React.Component {
    render(){
        const {
            user
        } = this.props;
        const image = user.photo;
        return (
            <View style={styles.component}>
                <View style={styles.imageView}>
                    {image ?
                        <Image
                            style={styles.image}
                            source={{uri: image}}
                        /> : <ActivityIndicator/>
                    }
                </View>
                <Text style={styles.name}>{capitalizeWords(user.name)}</Text>
                <Text style={styles.title}>Title</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    component: {
        height: 80,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageView: {
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 4,
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 25
    },
    name: {
        marginBottom: 2,
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        color: styleGuide.colorPalette.warmGrey
    },
    title: {
        marginBottom: 2,
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        color: styleGuide.colorPalette.whiteTwo
    }
});