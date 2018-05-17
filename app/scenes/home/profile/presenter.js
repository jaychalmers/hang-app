import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import {SettingsItem} from './components';
import styleGuide from './../../../config/styles';

export default class ProfilePresenter extends React.Component {
    render(){
        const {
            pressMyProfile,
            pressLocationSettings,
            pressAbout,
            pressSignOut
        } = this.props;
        return (
            <View style={styles.component}>
                <View style={styles.titleView}>
                    <Text style={styles.title}>Settings</Text>
                </View>
                <View style={styles.body}>
                    <SettingsItem
                        title={"My Profile"}
                        icon={require('./../../../../static/images/icons/man-user.png')}
                        onPress={pressMyProfile}
                    />
                    <SettingsItem
                        title={"Location Settings"}
                        icon={require('./../../../../static/images/icons/gps-location-symbol.png')}
                        onPress={pressLocationSettings}
                    />
                    <SettingsItem
                        title={"About"}
                        icon={require('./../../../../static/images/icons/info.png')}
                        onPress={pressAbout}
                    />
                    <SettingsItem
                        title={"Sign Out"}
                        icon={require('./../../../../static/images/icons/sign-out-option.png')}
                        onPress={pressSignOut}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    component: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    titleView: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 20,
        color: styleGuide.colorPalette.warmGrey,
    },
    body: {
        flex: 7,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        paddingLeft: 26,
        paddingRight: 26,
    }
});