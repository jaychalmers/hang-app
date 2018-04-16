import React from 'react';
import {Text,View,Alert,ActivityIndicator,AsyncStorage} from 'react-native';
import Presenter from './presenter';
import {post} from './../../../services/api';
import {saveLocalUser} from "./../../../services/localUserDetails";

//TODO: Social logins
export default class extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            fullName: '',
            email: '',
            password: '',
            awaitingServerResponse: false,
        };
    }

    static navigationOptions = {
        gesturesEnabled: true
    };

    pressRegisterButton = async () => {
        const {navigate} = this.props.navigation;
        const {fullName, email, password} = this.state;
        //Credit to: http://emailregex.com/
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!fullName || !email || !password){
            return Alert.alert('Missing Field','Please complete all fields',[{text: 'OK', onPress: ()=>{}}]);
        } else if (!emailRegex.test(email)){
            return Alert.alert('Invalid Email','Please enter a valid email address, eg. "name@domain.com"',[{text: 'OK', onPress: ()=>{}}]);
        } else {
                try {
                    //disable button by changing state
                    this.setState({awaitingServerResponse: true});
                    //make api request
                    const response = await post("/auth/register",{fullName,email,password});
                    //save response
                    await saveLocalUser(response);
                    //forward to details page
                    navigate("Details",{auth: response, profile: {name: fullName}});
                    this.setState({awaitingServerResponse: false});
            } catch (e) {
                const message = (e.response.data.error.code === 11000) ?
                    "There already exists a user with that email address. Please use a different address." :
                    e.message;
                Alert.alert('Error',message,[{text: 'OK', onPress: ()=>{}}]);
                this.setState({awaitingServerResponse: false});
            }
        }
    };

    setName = (name) => {
        this.setState({fullName: name});
    };

    setEmail = (email) => {
        this.setState({email: email});
    };

    setPassword = (password) => {
        this.setState({password: password});
    };

    render() {
        return (
            <Presenter
                pressRegisterButton={this.pressRegisterButton}
                setName={this.setName}
                setEmail={this.setEmail}
                setPassword={this.setPassword}
                {...this.state}
            />
        )
    }
}