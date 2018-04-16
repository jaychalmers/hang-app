import React from 'react';
import {Text,View,Alert,ActivityIndicator,AsyncStorage} from 'react-native';
import Button from 'react-native-button';
import {TextField} from 'react-native-material-textfield';
import BackgroundImage from './../../../components/backgroundImage';
import {styles,formFieldStyle} from './style';
import {notImplemented} from "../../../lib/alerts";

//TODO: Social logins
export default class extends React.Component {
    render() {
        let {
            email,
            password,
            fullName,
            awaitingServerResponse,
            pressRegisterButton,
            setName,
            setEmail,
            setPassword,
        } = this.props;
        return (
            <View style={styles.pageView}>
                <BackgroundImage source={require('../../../../static/images/background/register.png')}/>
                <View style={styles.foregroundView}>
                    <View style={styles.logoView}>
                        <Text style={styles.logo}>Hang</Text>
                    </View>
                    <View style={styles.formView}>
                        <TextField
                            {...formFieldStyle}
                            label={"Full Name"}
                            value={fullName}
                            onChangeText={(name) => setName(name)}
                            disabled={awaitingServerResponse}
                        />
                        <TextField
                            {...formFieldStyle}
                            label={"Email"}
                            value={email}
                            onChangeText={(email) => setEmail(email)}
                            keyboardType="email-address"
                            disabled={awaitingServerResponse}
                        />
                        <TextField
                            {...formFieldStyle}
                            label={"Password"}
                            value={password}
                            onChangeText={(password) => setPassword(password)}
                            secureTextEntry={true}
                            disabled={awaitingServerResponse}
                        />
                    </View>
                    <View style={styles.signupButtonView}>
                        {awaitingServerResponse ?
                            <ActivityIndicator color="white"/> :
                            <Button
                                containerStyle={styles.signupButtonContainer}
                                style={styles.signupButtonText}
                                onPress={() => {
                                    pressRegisterButton();
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
                            onPress={()=>{notImplemented("Social Login");}}
                            containerStyle={styles.facebookButtonContainer}
                            style={styles.socialButtonText}>
                            Sign Up using Facebook
                        </Button>
                        <Button
                            onPress={()=>{notImplemented("Social Login");}}
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