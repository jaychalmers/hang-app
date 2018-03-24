import React from 'react';
import {Text,View,Image} from 'react-native';
import {styles} from './style';
import Button from 'react-native-button';

class AttendanceButton extends React.Component {

    constructor(props){
        super(props);
    }

    renderButton(){
        const onPress = this.props.onPress;
        if (this.props.attending) {
            return (
                <View style={styles.attendingView}>
                    <Button
                        onPress={() => {onPress(false)}}
                        containerStyle={styles.attendingButtonContainer}
                        style={styles.attendingButtonText}
                    >
                        cancel
                    </Button>
                    <View style={styles.tickView}>
                        <Image
                            style={styles.attendanceTick}
                            source={require('../../../../../../static/images/icons/checked.png')}
                        />
                    </View>
                </View>
            )
        } else {
            return (
                <Button
                    onPress={() => {onPress(true)}}
                    containerStyle={styles.notAttendingButtonContainer}
                    style={styles.notAttendingButtonText}
                >
                    Going
                </Button>
            )
        }
    }

    render(){
        return (
            <View style={styles.buttonView}>
                {this.renderButton()}
            </View>
        )
    }
}

export default AttendanceButton;