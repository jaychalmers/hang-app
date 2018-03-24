import React from 'react';
import {View,Text,TextInput,StyleSheet} from 'react-native';
import styleGuide from "../../../../config/styles";

export default class extends React.Component {
    render(){
        const {
            description,
            onChangeText
        } = this.props;
        return (
            <View style={styles.componentView}>
                <Text style={styles.label}>Description</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={description ? styles.textCompleted : styles.textPlaceholder}
                        onChangeText={onChangeText}
                        placeholder={"Give people a summary of what to expect at your event"}
                        maxLength={200}
                        multiline={true}
                        underlineColorAndroid={'transparent'}
                    />
                    <Text style={styles.characterCount}>{description ? description.length : 0}/200</Text>
                </View>
            </View>
        )
    }
}

const commonTextProperties = {
    flex: 8,
    fontFamily: 'Montserrat-Light',
    fontSize: 12,
};

const styles = StyleSheet.create({
    componentView: {
        flexDirection: 'column',
        marginBottom: 22,
    },
    label: {
        fontFamily: 'Montserrat-Light',
        fontSize: 8,
        alignSelf: 'flex-start',
        color: styleGuide.colorPalette.warmGrey,
        marginBottom: 2,
    },
    inputView: {
        height: 142,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        borderColor: styleGuide.colorPalette.whiteTwo,
        borderWidth: 1,
        paddingRight: 7,
        paddingLeft: 7,
        paddingBottom: 7,
    },
    textCompleted: {
        ...commonTextProperties,
        color: styleGuide.colorPalette.warmGrey
    },
    textPlaceholder: {
        ...commonTextProperties,
        color: 'rgb(155,155,155)'
    },
    characterCount: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        color: styleGuide.colorPalette.whiteTwo,
        alignSelf: 'flex-end'
    },
});