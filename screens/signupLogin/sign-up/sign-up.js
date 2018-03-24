import React from 'react';
import {Text,View,Alert,ActivityIndicator,AsyncStorage} from 'react-native';
import Button from 'react-native-button';
import {TextField} from 'react-native-material-textfield';
import BackgroundImage from '../components/backgroundImage';

import {styles,formFieldStyle} from './style';
import * as server from './../../../config/server';
import {STORE} from './../../../config/constants';

//TODO: Social logins

class SignUp extends React.Component {
    static navigationOptions = {
        title: 'SignUp',
    };

    constructor(props){
        super(props);
        this.state = {
            fullName: '',
            email: '',
            password: '',
            awaitingResponse: false,
        };
    }

    makeRegistrationRequest () {
        const address = (server.url + "/auth/register");
        const form = {
            fullName: this.state.fullName,
            email: this.state.email,
            password: this.state.password
        };
        const req = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(form)
        };
        return fetch(address,req)
            .then((res) => res.json())
            .then((json) => {
                if (json.error) {
                    throw new Error(`The server encountered a problem with your request: ${json.error}`);
                } else {
                    //success
                    return json;
                }
            }).catch((error) => {
                throw new Error(`There was a problem making the http request: ${error.message}`);
        });
    };

    storeDetails (details) {
        return AsyncStorage.multiSet([
            [`${STORE}user`,details._id],
            [`${STORE}token`,details.token]
        ],(error) => {
            if (error) console.err("Error storing details: " + error);
        });
    };

    _pressRegisterButton = async (navigate) => {
        if (!this.state.fullName || !this.state.email || !this.state.password){
            return Alert.alert('Missing Field','Please complete all fields',[{text: 'OK', onPress: ()=>{}}]);
        } else {
            try {
                this.setState({awaitingServerResponse: true});
                const response = await this.makeRegistrationRequest();
                await this.storeDetails(response);
                navigate("Controller");
            } catch (e) {
                Alert.alert('Error',e.message,[{text: 'OK', onPress: ()=>{}}]);
                this.setState({awaitingServerResponse: false});
            }
        }
    };

    render() {
        let {email,password,fullName} = this.state;
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.pageView}>
                <BackgroundImage source={require('../../../static/images/background/register.png')}/>
                <View style={styles.foregroundView}>
                    <View style={styles.logoView}>
                        <Text style={styles.logo}>Hang</Text>
                    </View>
                    <View style={styles.formView}>
                        <TextField
                            {...formFieldStyle}
                            label={"Full Name"}
                            value={fullName}
                            onChangeText={(fullName) => this.setState({fullName})}
                            disabled={this.state.awaitingServerResponse}
                        />
                        <TextField
                            {...formFieldStyle}
                            label={"Email"}
                            value={email}
                            onChangeText={(email) => this.setState({email})}
                            keyboardType="email-address"
                            disabled={this.state.awaitingServerResponse}
                        />
                        <TextField
                            {...formFieldStyle}
                            label={"Password"}
                            value={password}
                            onChangeText={(password) => this.setState({password})}
                            secureTextEntry={true}
                            disabled={this.state.awaitingServerResponse}
                        />
                    </View>
                    <View style={styles.signupButtonView}>
                        {this.state.awaitingServerResponse ?
                            <ActivityIndicator color="white"/> :
                            <Button
                                containerStyle={styles.signupButtonContainer}
                                style={styles.signupButtonText}
                                onPress={() => {
                                    this._pressRegisterButton(navigate);
                                }}>
                                Sign Up
                            </Button>
                        }
                    </View>
                    <View style={styles.orView}>
                        <Text style={styles.or}>or</Text>
                    </View>
                    <View style={styles.socialButtonsView}>
                        <Button
                            onPress={()=>{}}
                            containerStyle={styles.facebookButtonContainer}
                            style={styles.socialButtonText}>
                            Sign Up using Facebook
                        </Button>
                        <Button
                            onPress={()=>{}}
                            containerStyle={styles.googleButtonContainer}
                            style={styles.socialButtonText}>
                            Sign Up using Google
                        </Button>
                    </View>
                </View>
            </View>
        )
    }
}

export default SignUp;