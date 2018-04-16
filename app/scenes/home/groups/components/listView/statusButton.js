import React from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';
import Button from 'react-native-button';
import styleGuide from "./../../../../../config/styles";

/*
This is the Join or Attend button in the listItem.
 */

export default class extends React.Component {
    render(){
        const {
            onPress,
            active
        } = this.props;
        if (active) {
            return (
                <View style={styles.component}>
                    <Button
                        onPress={onPress}
                        containerStyle={styles.activeButtonContainer}
                        style={styles.activeButtonText}
                    >
                        {this.getLabel(active)}
                    </Button>
                </View>
            )
        } else {
            return (
                <View style={styles.component}>
                    <Button
                        onPress={onPress}
                        containerStyle={styles.inactiveButtonContainer}
                        style={styles.inactiveButtonText}
                    >
                        {this.getLabel(active)}
                    </Button>
                </View>
            )
        }
    }

    getLabel = (active) => {
        const {
            type
        } = this.props;
        if (type === "GROUP_DISCOVER"){
            return "Join";
        } else if (type === "GROUP_JOINED") {
            return "Leave";
        } else {
            throw new Error("Invalid type supplied to statusButton");
        }
    };
}



const buttonContainerValues = {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
};

const fontValues = {
    fontFamily: 'Montserrat-Regular',
    fontSize: 13,
};

const styles = StyleSheet.create({
    component: {
        width: 74,
        height: 20
    },
    activeButtonContainer: {
        backgroundColor: styleGuide.colorPalette.reddishPink,
        borderRadius: 1,
        ...buttonContainerValues
    },
    activeButtonText: {
        ...fontValues,
        color: 'white'
    },
    inactiveButtonContainer: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: styleGuide.colorPalette.reddishPink,
        borderRadius: 1,
        ...buttonContainerValues
    },
    inactiveButtonText: {
        ...fontValues,
        color: styleGuide.colorPalette.reddishPink
    }
});