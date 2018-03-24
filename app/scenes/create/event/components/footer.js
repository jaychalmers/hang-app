import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Alert} from 'react-native';
import styleGuide from './../../../../config/styles';

export default class extends React.Component {
    render(){
        const {cancel, checkEvent, submitEvent} = this.props;
        return (
            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.cancelView}
                    onPress={()=>{cancel()}}
                >
                    <Text style={styles.text}>cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.createView}
                    onPress={()=>{
                        const error = checkEvent();
                        if (error) {
                            this.showAlert(error);
                        } else {
                            if (!submitEvent()){
                                this.showAlert("There was a problem creating the event. Please try again later.");
                            }
                        }
                    }}
                >
                    <Text style={styles.text}>create</Text>
                </TouchableOpacity>
            </View>
        )
    }

    showAlert(error){
        Alert.alert(
            'Problem Creating Event',
            error,
            [{text: "OK",onPress:()=>{}}]
        );
    }
}

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: styleGuide.colorPalette.uglyBlue
    },
    text: {
        fontFamily: 'Montserrat-Light',
        fontSize: 18,
        color: 'white'
    },
    cancelView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    createView: {
        flex: 3,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftColor: 'white',
        borderLeftWidth: 1,
        borderStyle: 'solid'
    }
});