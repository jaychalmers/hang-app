import React from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';
import styleGuide from "./../../../../config/styles";

export default class extends React.Component {
    render(){
        const {title,updateTitle} = this.props;
        return (
            <View style={styles.componentView}>
                <Text style={styles.label}>Title</Text>
                <View style={styles.textInputBox}>
                    <TextInput
                        style={title ? styles.inputTextCompleted : styles.inputTextPlaceholder}
                        onChangeText={updateTitle}
                        placeholder={"Event Name (E.g. After work lazer tag….)"}
                        maxLength={70}
                        underlineColorAndroid={'transparent'}
                    />
                    <Text style={styles.characterCount}>{title ? title.length : 0}/70</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    componentView: {
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
    characterCount: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        color: styleGuide.colorPalette.whiteTwo
    }
});