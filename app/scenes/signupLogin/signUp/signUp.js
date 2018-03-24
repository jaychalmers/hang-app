import React from 'react';
import {Text,View,Alert,ActivityIndicator,AsyncStorage} from 'react-native';
import Button from 'react-native-button';
import {TextField} from 'react-native-material-textfield';
import BackgroundImage from './../../../components/backgroundImage';
import {post} from './../../../services/api';
import {saveLocalUser} from "./../../../services/localUserDetails";
import {styles,formFieldStyle} from './style';

//TODO: Social logins
class SignUp extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            fullName: '',
            email: '',
            password: '',
            awaitingResponse: false,
        };
    }

    pressRegisterButton = async (navigate) => {
        const {fullName, email, password} = this.state;
        if (!fullName || !email || !password){
            return Alert.alert('Missing Field','Please complete all fields',[{text: 'OK', onPress: ()=>{}}]);
        } else {
            try {
                //disable button by changing state
                this.setState({awaitingServerResponse: true});
                //make api request
                const response = await post("/auth/register",{fullName,email,password});
                //save response
                await saveLocalUser(response);
                //return to application root
                //TODO: This should lead to the profile details instead
                navigate("Controller");
                //don't worry about updating state, we're leaving
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
                                    this.pressRegisterButton(navigate);
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