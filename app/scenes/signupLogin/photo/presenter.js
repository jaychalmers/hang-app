import React from 'react';
import {Text,View,Alert,ActivityIndicator,StyleSheet,TouchableOpacity} from 'react-native';
import Button from 'react-native-button';
import {Camera} from 'expo';
import BackgroundImage from './../../../components/backgroundImage';
import styleGuide from "../../../config/styles";

export default class extends React.Component {
    render() {
        let {
            next,
            goBack,
            photo
        } = this.props;
        const buttonText = photo ? "Next" : "Skip";
        return (
            <View style={styles.pageView}>
                <BackgroundImage source={require('../../../../static/images/background/register.png')}/>
                <View style={styles.foregroundView}>
                    <TouchableOpacity style={styles.backView} onPress={goBack}>
                        <Text style={styles.backButton}>Back</Text>
                    </TouchableOpacity>
                    <View style={styles.cameraView}>
                        {this.renderCamera()}
                    </View>
                    <View style={styles.nextView}>
                        <Button
                            containerStyle={styles.nextButtonContainer}
                            style={styles.nextButtonText}
                            onPress={next}>
                            {buttonText}
                        </Button>
                    </View>
                </View>
            </View>
        )
    }

    renderCamera = () => {
        const {
            hasCameraPermission
        } = this.props;
        if (hasCameraPermission){
            return (
                <View style={{flex: 1}}>
                    <Camera
                        style={{flex: 1}}
                        type={Camera.Constants.Type.front}
                        ref={(ref) => {this.camera = ref;}}
                    >
                        <View style={styles.overlayView}>
                            <TouchableOpacity
                                style={styles.takePictureButton}
                                onPress={this.takePic}
                            />
                            <Text style={styles.instructions}>Press to take a profile picture</Text>
                        </View>
                    </Camera>
                </View>
            );
        } else {
            return this.renderCannotAccessCamera();
        }
    };

    renderCannotAccessCamera = () => {
        return (
            <View style={styles.cannotAccessCameraView}>
                <Text style={styles.cannotAccessCameraText}>
                    Cannot access the camera. Please enable camera permissions in your app settings.
                </Text>
            </View>
        )
    };

    takePic = async () => {
        const {embedPic} = this.props;
        if (this.camera) {
            const photo = await this.camera.takePictureAsync({
                quality: 1,
                base64: true
            });
            embedPic(photo);
        }
    };
}

const flexValues = {
    backButton: 1,
    camera: 6,
    next: 1,
};

const styles = StyleSheet.create({
    pageView: {
        flex: 1
    },
    foregroundView: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingLeft: 32,
        paddingRight: 32,
        paddingTop: 50
    },
    backView: {
        flex: flexValues.backButton,
        alignSelf: 'flex-start'
    },
    backButton: {
        fontSize: 18,
        color: styleGuide.colorPalette.white,
        fontFamily: 'Montserrat-Light'
    },
    cameraView: {
        flex: flexValues.camera,
        width: '100%',
        marginBottom: 20,
    },
    nextView: {
        flex: flexValues.next
    },
    instructions: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        color: styleGuide.colorPalette.whiteTwo
    },
    nextButtonContainer: {
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
    nextButtonText: {
        color: styleGuide.colorPalette.white,
        fontFamily: 'Montserrat-Light',
        fontSize: 14
    },
    overlayView: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 12,
    },
    takePictureButton: {
        width: 40,
        height: 40,
        borderRadius: 40,
        borderColor: styleGuide.colorPalette.white,
        backgroundColor: 'rgb(255,61,61)',
        marginBottom: 12,
    },
    cannotAccessCameraView: {
        //TODO: Styling
    },
    cannotAccessCameraText: {

    }
});