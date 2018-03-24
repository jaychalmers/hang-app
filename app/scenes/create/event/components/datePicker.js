import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Alert} from 'react-native';
import Modal from 'react-native-modal-datetime-picker';
import styleGuide from "../../../../config/styles";
const moment = require('moment');

/*
    This component can be used for both the start date and end date.
    It allows the user to set the relevant container.state.date,
    and manipulates the date to display time and date in seperate pickers.
 */

export default class extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            datePickerVisible: false,
            timePickerVisible: false
        }
    }

    render(){
        const {
            type,
            date,
            startDate
        } = this.props;
        //sanity check
        if (type !== "Starts" && type !== "Ends") throw new Error("Invalid prop type supplied to datePicker");

        // Set minimum date.
        let minimumDate = new Date();
        if (type === "Ends") {
            minimumDate = startDate;
        }

        return (
            <View style={styles.componentView}>
                <View style={styles.labelView}>
                    <Text style={styles.label}>{type}</Text>
                </View>
                <TouchableOpacity
                    style={styles.datePicker}
                    onPress={()=>{this.setDateModalVisible(true)}}
                >
                    <Text style={styles.pickerLabel}>{moment(date).format("D MMMM YYYY")}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.timePicker}
                    onPress={()=>{this.setTimeModalVisible(true)}}
                >
                    <Text style={styles.pickerLabel}>{moment(date).format("HH:mm")}</Text>
                </TouchableOpacity>
                <Modal
                    mode={"date"}
                    date={date}
                    isVisible={this.state.datePickerVisible}
                    onConfirm={this.handleDatePicked}
                    onCancel={()=>{this.setDateModalVisible(false)}}
                    minimumDate={minimumDate}
                />
                <Modal
                    mode={"time"}
                    date={date}
                    isVisible={this.state.timePickerVisible}
                    onConfirm={this.handleTimePicked}
                    onCancel={()=>{this.setTimeModalVisible(false)}}
                />
            </View>
        );
    }

    setDateModalVisible = (boolean) => {
        this.setState({datePickerVisible: boolean});
    };

    handleDatePicked = (date) => {
        this.setDateModalVisible(false);
        if (!this.props.update(date)){
            this.showAlert();
        }
    };

    showAlert(){
        Alert.alert(
            "Invalid Time",
            "End date and time must be after the start date and time!",
            [
                {text: 'OK', onPress: () => {}}
            ],
            {cancelable: false}
        );
    }

    setTimeModalVisible = (boolean) => {
        this.setState({timePickerVisible: boolean});
    };

    handleTimePicked = (time) => {
        this.setTimeModalVisible(false);
        if (!this.props.update(time)){
            this.showAlert();
        }
    };
}

const pickerStyle = {
    height: 33,
    borderWidth: 1,
    borderColor: styleGuide.colorPalette.whiteTwo,
    alignItems: 'center',
    justifyContent: 'center'
};

const styles = StyleSheet.create({
    componentView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 22,
    },
    labelView: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    label: {
        fontFamily: 'Montserrat-Light',
        fontSize: 12,
        color: styleGuide.colorPalette.warmGrey
    },
    datePicker: {
        flex: 5,
        ...pickerStyle,
        marginRight: 10,
    },
    pickerLabel: {
        fontFamily: 'Montserrat-Regular',
        color: styleGuide.colorPalette.warmGrey,
        fontSize: 12,
    },
    timePicker: {
        flex: 3,
        ...pickerStyle
    },
});
