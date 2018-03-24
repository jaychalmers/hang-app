import React from 'react';
import {Text,View,Image,StyleSheet,TouchableOpacity} from 'react-native';
import Button from 'react-native-button';
import styleGuide from './../../../config/styles';

export default class extends React.Component {
    render(){
        const {
            cancel
        } = this.props.screenProps;
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.pageView}>
                <TouchableOpacity
                    style={styles.buttonView}
                    onPress={() => navigate('Event')}
                >
                    <Image
                        source={require('./../../../../static/images/icons/create-new-event.png')}
                        style={styles.image}
                        resizeMode={'contain'}
                    />
                    <Text style={styles.buttonText}>Create a new event</Text>
                </TouchableOpacity>
                <View style={styles.divider}/>
                <TouchableOpacity
                    style={styles.buttonView}
                    onPress={() => navigate('Group')}
                >
                    <Image
                        source={require('./../../../../static/images/icons/create-new-group.png')}
                        style={styles.image}
                        resizeMode={'contain'}
                    />
                    <Text style={styles.buttonText}>Create a new group</Text>
                </TouchableOpacity>
                <View style={styles.cancelView}>
                    <Button
                        onPress={cancel}
                        containerStyle={styles.cancelButtonStyle}
                        style={styles.cancelButtonTextStyle}
                    >
                        cancel
                    </Button>
                </View>
            </View>
        )
    }
}

const flexValues = {
    options: 10,
    cancel: 1
};

const styles = StyleSheet.create({
    pageView: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: styleGuide.colorPalette.uglyBlue,
        paddingLeft: '15%',
        paddingRight: '15%',
        paddingTop: '8%',
        paddingBottom: '8%'
    },
    buttonView: {
        flex: flexValues.options,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        color: styleGuide.colorPalette.white
    },
    image: {
        width: 34,
        height: 43,
        tintColor: styleGuide.colorPalette.white
    },
    divider: {
        height: 0,
        borderTopColor: 'rgba(255,255,255,0.5)',
        borderTopWidth: 1,
        borderStyle: 'solid'
    },
    cancelView: {
        flex: flexValues.cancel,
        flexDirection: 'column',
        alignItems: 'center'
    },
    cancelButtonStyle: {
        width: 151,
        height: 29,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: styleGuide.colorPalette.white,
        borderRadius: 1,
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: 'transparent'
    },
    cancelButtonTextStyle: {
        fontFamily: 'Montserrat-Light',
        fontSize: 14,
        color: styleGuide.colorPalette.white
    }
});