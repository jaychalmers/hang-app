import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import styleGuide from "../../../../config/styles";

export default class extends React.Component {

    render(){
        const {
            repeat
        } = this.props;
        return (
            <View style={styles.componentView}>
                <View style={styles.labelView}>
                    <Text style={styles.label}>Repeat</Text>
                </View>
                <TouchableOpacity
                    style={styles.picker}
                >
                    <Text style={styles.pickerLabel}>{repeat ? repeat : "Does Not Repeat"}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    componentView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 22,
    },
    labelView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    label: {
        fontFamily: 'Montserrat-Light',
        fontSize: 12,
        color: styleGuide.colorPalette.warmGrey
    },
    picker: {
        flex: 4,
        height: 33,
        borderWidth: 1,
        borderColor: styleGuide.colorPalette.whiteTwo,
        alignItems: 'center',
        justifyContent: 'center'
    },
    pickerLabel: {
        fontFamily: 'Montserrat-Regular',
        color: styleGuide.colorPalette.warmGrey,
        fontSize: 12,
    }
});
