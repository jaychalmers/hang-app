import React from 'react';
import {Text,View} from 'react-native';

class ForgottenPassword extends React.Component {
    static navigationOptions = {
        title: 'ForgottenPassword',
    };
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'stretch',
                }}
            >
                <Text>This is a ForgottenPassword component</Text>
            </View>
        )
    }
}

export default ForgottenPassword;