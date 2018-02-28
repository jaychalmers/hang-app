import {StackNavigator} from 'react-navigation';

//SignupLogin Screens
import OpenHang from "./../scenes/signupLogin/openHang/openHang";
import SignUp from "./../scenes/signupLogin/signUp/signUp";
import Login from "./../scenes/signupLogin/login/login";
//FORGOTTEN PASSWORD

export default StackNavigator(
    {
        OpenHang: {
            screen: OpenHang,
            navigationOptions: {
                title: 'OpenHang'
            }
        },
        Login: {
            screen: Login,
            navigationOptions: {
                title: 'Login'
            }
        },
        SignUp: {
            screen: SignUp,
            navigationOptions: {
                title: 'SignUp'
            }
        },
    },
    {
        initialRoute: 'OpenHang',
        headerMode: 'none'
    }
);