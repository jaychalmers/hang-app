import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import Modal from 'react-native-modal-datetime-picker';
import styleGuide from "../../../../config/styles";
const moment = require('moment');

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
            startDate,
            startTime
        } = this.props;
        if (type !== "Starts" && type !== "Ends") throw new Error("Invalid prop type supplied to datePicker");
        //Set date and time to current if null
        const date = (this.props.date) ? this.props.date : new Date();
        const time = (this.props.time) ? this.props.time : new Date();
        //if type is 'Ends', set minDate to startDate. Else, just use now.
        const minDate = (type === "Ends" && startDate) ? startDate : new Date();
        //Ditto, but +2 years
        const maxDate = (type === "Ends" && startDate) ? moment(startDate).add(2,'y').toDate() : moment().add(2,'y').toDate();
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
                    <Text style={styles.pickerLabel}>{moment(time).format("HH:mm")}</Text>
                </TouchableOpacity>
                <Modal
                    mode={"date"}
                    date={date}
                    isVisible={this.state.datePickerVisible}
                    onConfirm={this.handleDatePicked}
                    onCancel={()=>{this.setDateModalVisible(false)}}
                    minimumDate={minDate}
                    maximumDate={maxDate}
                />
                <Modal
                    mode={"time"}
                    date={time}
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
        this.props.updateDate(date);
        this.setDateModalVisible(false);
    };

    setTimeModalVisible = (boolean) => {
        this.setState({timePickerVisible: boolean});
    };

    handleTimePicked = (time) => {
        this.props.updateTime(time);
        this.setTimeModalVisible(false);
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
