import React from 'react';
import {Facebook,Google} from 'expo';
import {Text,View,Alert,ActivityIndicator} from 'react-native';
import {post} from '../../../services/api';
import {saveLocalUser} from "../../../services/localUserDetails";
import Button from 'react-native-button';
import BackgroundImage from '../../../components/backgroundImage';
import {TextField} from 'react-native-material-textfield';
import {styles,textBoxStyles} from './style';
import {notImplemented} from "../../../lib/alerts";

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    };

    static navigationOptions = {
        gesturesEnabled: true
    };

    async pressLoginButton (){
        const {email,password} = this.state;
        const {reloadUser} = this.props.screenProps;
        if (!email || !password){
            return Alert.alert('Missing Field','Please complete all fields',[{text: 'OK', onPress:()=>{}}]);
        } else {
            try {
                this.setState({awaitingServerResponse: true});
                const response = await post("/auth/login",{email,password});
                await saveLocalUser(response);
                reloadUser();
            } catch (e) {
                Alert.alert('Login Error',e.message,[{text: 'OK', onPress: ()=>{}}]);
                this.setState({awaitingServerResponse: false});
            }
        }
    }

    render() {
        let { email,password } = this.state;
        return (
            <View style={styles.pageView}>
                <BackgroundImage source={require('../../../../static/images/background/login.png')}/>
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
                                    this.pressLoginButton();
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
                            onPress={() => {notImplemented("Social Login");}}
                            containerStyle={styles.facebookButtonContainer}
                            style={styles.socialButtonText}>
                            Connect with Facebook
                        </Button>
                        <Button
                            onPress={() => {notImplemented("Social Login");}}
                            style={styles.socialButtonText}>
                            Connect with Google
                        </Button>
                    </View>
                    <View style={styles.forgottenButtonView}>
                        <Button
                            onPress={() => {notImplemented("Forgotten Password");}}
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

/*

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
        const { type, token } = await Facebook.logInWithReadPermissionsAsync(FACEBOOK.APP_ID, {
            permissions: ['public_profile', 'email'],
        });
        if (type === 'success'){
            //something
        }
    }

    async _loginWithGoogle() {
        try {
            const result = await Google.logInAsync({
                iosClientId: GOOGLE.CLIENT_ID_IOS,
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
 */