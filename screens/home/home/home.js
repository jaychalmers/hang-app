import React from 'react';
import {Text,View} from 'react-native';

class Home extends React.Component {
    static navigationOptions = {
        title: 'Home',
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
                <Text>This is a Home component</Text>
            </View>
        )
    }
}

export default Home;