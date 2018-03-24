import React from 'react';
import {View,Button,Image,AsyncStorage} from 'react-native';
import {Util} from 'expo';
import {tabBarIcon} from './../homeNavigator/style';

class Profile extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ focused, tintColor }) => (
            <Image
                style={{tintColor: tintColor,...tabBarIcon}}
                source={require('./../../../static/images/icons/man-user.png')}/>
        )
    };

    logout () {
        AsyncStorage.multiRemove(["@HangStore:user","@HangStore:token"],(error)=>{
            Util.reload();
        });
    }

    render() {
        const navigator = this.props.navigation;
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                }}
            >
                <Button
                    onPress={this.logout}
                    title="Logout"
                />
            </View>
        )
    }
}

export default Profile;