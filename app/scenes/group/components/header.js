import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
import styleGuide from "../../../config/styles";
import {navigateBack,navigateHome} from "./../../../lib/leafNavigation";

export default class extends React.Component {
    render(){
        const {
            name,
            city,
            photo,
            navigation
        } = this.props;
        return (
            <View style={styles.component}>
                <View style={styles.bgImageContainer}>
                    <Image
                        style={styles.bgImage}
                        source={{uri: photo}}
                        resizeMode='cover'
                    />
                    <View style={styles.overlay}/>
                </View>
                <View style={styles.contentView}>
                    <View style={styles.buttonView}>
                        <TouchableOpacity onPress={() => navigateBack(navigation)}>
                            <Image style={styles.backButton} source={require('./../../../../static/images/icons/left-arrow.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigateHome(navigation)}>
                            <Image style={styles.homeButton} source={require('./../../../../static/images/icons/home.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.textView}>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.city}>{city}</Text>
                    </View>
                    <Text style={{alignSelf: 'flex-end'}}>Join button</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    component: {
        flex: 1,
    },
    contentView: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: '6%',
        marginBottom: '6%',
    },
    buttonView: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textView: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    name: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 24,
        color: 'white',
        backgroundColor: 'transparent'
    },
    city: {
        fontFamily: 'Montserrat-Light',
        fontSize: 18,
        color: 'white',
        backgroundColor: 'transparent'
    },
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
        backgroundColor: 'rgb(65,117,5)',
        opacity: 0.42
    },
    backButton: {
        width: 23,
        height: 23,
        tintColor: styleGuide.colorPalette.white,
    },
    homeButton: {
        width: 19,
        height: 19,
        tintColor: styleGuide.colorPalette.white
    }
});