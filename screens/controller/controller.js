import React from 'react';
import {AsyncStorage} from 'react-native';
import {STORE} from './../../config/constants';

const keys = [
    `${STORE}user`,
    `${STORE}token`,
];

class Controller extends React.Component {

    componentWillMount(){
        const {navigate} = this.props.navigation;
        AsyncStorage.multiGet(keys,(error,res) =>{
            if (error) {
                error.map((error)=>console.log("AsyncStorage error: " + error));
            } else {
                //TODO: Rethink this - I think you wanna check that the token is still valid before proceeding
                const user = res[0][1];
                const token = res[1][1];
                if (token) {
                    //User has a valid json token, thus is logged in...?
                    navigate('Home',{user: user,token: token})
                } else {
                    //Else take to login/reg page
                    navigate('OpenHang');
                }
            }
        });
    }

    render(){
        return (null);
    }
}

export default Controller;