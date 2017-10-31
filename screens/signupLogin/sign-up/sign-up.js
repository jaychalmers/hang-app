import React from 'react';
import {Text,View} from 'react-native';
import {styles} from './style';

class SignUp extends React.Component {
    static navigationOptions = {
        title: 'SignUp',
    };
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                }}
            >
                <Text>This is a SignUp component</Text>
            </View>
        )
    }
}

export default SignUp;