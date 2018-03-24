import React from 'react';
import {Facebook,Google} from 'expo';
import {Text,View,AsyncStorage,Alert,ActivityIndicator} from 'react-native';
import Button from 'react-native-button';
import BackgroundImage from '../components/backgroundImage';
import {TextField} from 'react-native-material-textfield';
import {styles,textBoxStyles} from './style';

import * as server from './../../../config/server';
import * as facebookConfig from './../../../config/facebook';
import * as googleConfig from './../../../config/google';
import {STORE} from "../../../config/constants";

class Login extends React.Component {
    static navigationOptions = {
        title: 'Login',
    };

    state = {
        email: '',
        password: ''
    };

    _onLoginPress = name => {
        if (name === 'facebook') {
            this._loginWithFacebook();
        } else {
            this._loginWithGoogle();
        }
    };

    async login(args) {
        try {
            const {data} = await axios.post(`/users/auth0`, args);
            return data;
        } catch (e) {
            throw e;
        }
    }

    async _loginWithFacebook() {
        const { type, token } = await Facebook.logInWithReadPermissionsAsync(facebookConfig.app_id, {
            permissions: ['public_profile', 'email'],
        });
        if (type === 'success'){
            //something
        }
    }

    async _loginWithGoogle() {
        try {
            const result = await Google.logInAsync({
                iosClientId: googleConfig.client_id_ios,
                scopes: ['profile','email'],
            });
            if (result.type === 'success') {
                //something
            } else {
                return { cancelled: true};
            }
        } catch (e) {
            throw e;
        }
    }

    async makeLoginRequest() {
        const address = (server.url + "/auth/login");
        const request = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        };
        return fetch(address,request)
            .then((res) => res.json())
            .then((json) => {
                if (json.error) {
                    throw new Error(`The server encounted a problem with your request: ${json.error}`);
                } else {
                    //success
                    return json;
                }
            }).catch((error) => {
                throw new Error(`There was a problem making the http request: ${error.message}`);
            });
    };

    async pressLoginButton (navigate){
        if (!this.state.email || !this.state.password){
            return Alert.alert('Missing Field','Please complete all fields',[{text: 'OK', onPress:()=>{}}]);
        } else {
            try {
                this.setState({awaitingServerResponse: true});
                const response = await this.makeLoginRequest();
                await this.storeDetails(response);
                navigate("Controller");
            } catch (e) {
                Alert.alert('Error',e.message,[{text: 'OK', onPress: ()=>{}}]);
                this.setState({awaitingServerResponse: false});
            }
        }
    }

    async storeDetails (details) {
        return AsyncStorage.multiSet([
            [`${STORE}user`,details._id],
            [`${STORE}token`,details.token]
        ],(error) => {
            if (error) console.err("Error storing details: " + error);
        });
    };

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
                            disabled={this.state.awaitingServerResponse}
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
                            disabled={this.state.awaitingServerResponse}
                        />
                    </View>
                    <View style={styles.loginButtonView}>
                        {this.state.awaitingServerResponse ?
                            <ActivityIndicator color="white"/> :
                            <Button
                                containerStyle={styles.loginButtonContainer}
                                style={styles.loginButtonText}
                                onPress={() => {
                                    this.pressLoginButton(navigate);
                                }}>
                                Login
                            </Button>
                        }
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