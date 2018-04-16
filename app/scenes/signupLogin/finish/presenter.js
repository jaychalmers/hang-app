import React from 'react';
import {Text,View,Alert,ActivityIndicator,StyleSheet} from 'react-native';
import Button from 'react-native-button';
import BackgroundImage from './../../../components/backgroundImage';
import styleGuide from "../../../config/styles";

export default class extends React.Component {
    render() {
        const {
            awaitingServerResponse
        } = this.props;
        return (
            <View style={styles.pageView}>
                <BackgroundImage source={require('../../../../static/images/background/register.png')}/>
                <View style={styles.foregroundView}>
                    {awaitingServerResponse ? <ActivityIndicator color={'white'}/> : this.renderButton()}
                </View>
            </View>
        )
    }

    renderButton = () => {
        const {
            finish
        } = this.props;
        return (
            <Button
                containerStyle={styles.buttonContainer}
                style={styles.buttonText}
                onPress={finish}>
                Finish
            </Button>
        );
    }
}


const styles = StyleSheet.create({
    pageView: {
        flex: 1
    },
    foregroundView: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    buttonContainer: {
        width: 151,
        height: 29,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: styleGuide.colorPalette.white,
        borderRadius: 1,
        borderStyle: 'solid',
        borderWidth: 1
    },
    buttonText: {
        color: styleGuide.colorPalette.white,
        fontFamily: 'Montserrat-Light',
        fontSize: 14
    }
});