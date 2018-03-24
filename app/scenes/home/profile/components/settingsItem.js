import React from 'react';
import {View,StyleSheet,TouchableOpacity,Text,Image} from 'react-native';
import styleGuide from './../../../../config/styles';

export default class SettingsItem extends React.Component {
    render(){
        const {title,icon,onPress} = this.props;
        return (
            <View style={styles.component}>
                <View style={styles.iconView}>
                    <Image
                        source={icon}
                        style={styles.icon}
                    />
                </View>
                <TouchableOpacity
                    style={styles.buttonView}
                    onPress={() => {onPress()}}
                >
                    <Text style={styles.label}>{title}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    component: {
        flexDirection: 'row',
        height: 58,
    },
    iconView: {
        width: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        width: 24,
        height: 24,
        tintColor: styleGuide.colorPalette.uglyBlue
    },
    buttonView: {
        padding: 15,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderBottomWidth: 1,
        borderBottomColor: styleGuide.colorPalette.whiteTwo,
    },
    label: {
        fontFamily: 'Montserrat-Light',
        fontSize: 18,
        color: styleGuide.colorPalette.warmGrey,

    }
});