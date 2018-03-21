import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
import styleGuide from "../../../../config/styles";

export default class extends React.Component {
    render(){
        const {group} = this.props;
        return (
            <View style={styles.groupLinker}>
                <Text style={styles.label}>Group</Text>
                <View style={styles.textInputBox}>
                    {group ?
                        <Text style={styles.inputTextCompleted}>{group}</Text> :
                        <Text style={styles.inputTextPlaceholder}>Link this event to a group</Text>
                    }
                    <Image
                        style={styles.icon}
                        source={require('./../../../../../static/images/icons/down-arrow-inside-circle.png')}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    groupLinker: {
        flexDirection: 'column',
        marginBottom: 22
    },
    label: {
        fontFamily: 'Montserrat-Light',
        fontSize: 8,
        alignSelf: 'flex-start',
        color: styleGuide.colorPalette.warmGrey,
        marginBottom: 2,
    },
    textInputBox: {
        height: 33,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: styleGuide.colorPalette.whiteTwo,
        borderWidth: 1,
        paddingRight: 7,
        paddingLeft: 7
    },
    inputTextCompleted: {
        flex: 1,
        fontFamily: 'Montserrat-Light',
        fontSize: 12,
        color: styleGuide.colorPalette.warmGrey
    },
    inputTextPlaceholder: {
        flex: 1,
        fontFamily: 'Montserrat-Light',
        fontSize: 12,
        color: 'rgb(155,155,155)'
    },
    icon: {
        width: 20,
        height: 20,
        tintColor: styleGuide.colorPalette.whiteTwo
    }
});