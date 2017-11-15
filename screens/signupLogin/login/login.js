import React from 'react';
import {Text,View} from 'react-native';
import Button from 'react-native-button';
import BackgroundImage from '../../../components/backgroundImage';
import {TextField} from 'react-native-material-textfield';
import {styles,textBoxStyles} from './style';

import * as server from './../../../config/server';

class Login extends React.Component {
    static navigationOptions = {
        title: 'Login',
    };

    state = {
        email: '',
        password: ''
    };

    async makeLoginRequest(email,password){
        const address = (server.url + "/passport/login");
        const request = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        };
        try {
            console.log("Making fetch at " + address);
            console.log("Using request: " + JSON.stringify(request));
            const response = await fetch(address,request);
            console.log("Responded with: " + response);
        } catch (error) {
            console.error(error);
            console.log("There was an error baby");
            return false;
        }
        //if response is good???
        console.log("Response was good?");
        return true;
    };

    pressLoginButton(navigate){
        //TODO: This should be async
        //const result = this.makeLoginRequest(this.state.email,this.state.password);

        //disabled the above for testing
        const result = true;
        if (result) {
            navigate('Home');
        } else {
            console.log("Bad response");
        }
    }


    render() {
        let { email,password } = this.state;
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.pageView}>
                <BackgroundImage source={require('../../../static/images/background/login.png')}/>
                <View style={styles.foregroundView}>
                    <View style={styles.logoView}>
                        <Text style={styles.logo}>Hang</Text>
                    </View>
                    <View style={styles.textFieldView}>
                        <TextField
                            tintColor={textBoxStyles.tintColor}
                            baseColor={textBoxStyles.baseColor}
                            textColor={textBoxStyles.textColor}
                            label="E-mail"
                            keyboardType="email-address"
                            value={email}
                            onChangeText={(email) => this.setState({email})}
                        />
                        <TextField
                            tintColor={textBoxStyles.tintColor}
                            baseColor={textBoxStyles.baseColor}
                            textColor={textBoxStyles.textColor}
                            label="Password"
                            keyboardType="default"
                            secureTextEntry={true}
                            email={password}
                            onChangeText={(password) => this.setState({password})}
                        />
                    </View>
                    <View style={styles.loginButtonView}>
                        <Button
                            containerStyle={styles.loginButtonContainer}
                            style={styles.loginButtonText}
                            onPress={() => {
                                this.pressLoginButton(navigate);
                            }}>
                            Login
                        </Button>
                    </View>
                    <View style={styles.orView}>
                        <Text style={styles.or}>or</Text>
                    </View>
                    <View style={styles.socialView}>
                        <Button
                            onPress={() => {}}
                            containerStyle={styles.facebookButtonContainer}
                            style={styles.socialButtonText}>
                            Connect with Facebook
                        </Button>
                        <Button
                            onPress={() => {}}
                            containerStyle={styles.googleButtonContainer}
                            style={styles.socialButtonText}>
                            Connect with Google
                        </Button>
                    </View>
                    <View style={styles.forgottenButtonView}>
                        <Button
                            onPress={() => navigate('ForgottenPassword')}
                            containerStyle={styles.forgottenButtonContainer}
                            style={styles.forgottenButtonText}>
                            Forgotten your password?
                        </Button>
                    </View>
                </View>
            </View>
        );
    }
}

export default Login;