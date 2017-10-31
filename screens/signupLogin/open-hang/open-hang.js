import React from 'react';
import {Text,View} from 'react-native';
import Button from 'react-native-button';
import BackgroundImage from './../../../components/backgroundImage';
import {styles} from './style';

class OpenHang extends React.Component {
    static navigationOptions = {
        title: 'OpenHang',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.pageView}>
                <BackgroundImage source={require('./../../../static/images/background/openHang.png')}/>
                <View style={styles.foregroundView}>
                    <View style={styles.logoView}>
                        <Text style={styles.logo}>Hang</Text>
                    </View>
                    <View style={styles.buttonView}>
                        <Button
                            onPress={() => navigate('Login')}
                            containerStyle={styles.loginButtonContainer}
                            style={styles.loginButtonText}>
                            Login
                        </Button>
                        <Button
                            onPress={() => navigate('SignUp')}
                            containerStyle={styles.signupButtonContainer}
                            style={styles.signupButtonText}>
                            Sign up
                        </Button>
                    </View>
                </View>
            </View>
        );
    }
}

export default OpenHang;