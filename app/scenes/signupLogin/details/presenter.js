import React from 'react';
import {Text,View,Alert,ActivityIndicator,StyleSheet,TouchableOpacity} from 'react-native';
import Button from 'react-native-button';
import Modal from 'react-native-modal-datetime-picker';
import {TextField} from 'react-native-material-textfield';
import BackgroundImage from './../../../components/backgroundImage';
import styleGuide from "../../../config/styles";
const words = require('lodash/words');
const moment = require('moment');

//TODO: Social logins
export default class extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            datePickerVisible: false,
        }
    }
    render() {
        let {
            name,
            dob,
            city,
            goBack,
            next,
            awaitingServerResponse
        } = this.props;
        return (
            <View style={styles.pageView}>
                <BackgroundImage source={require('../../../../static/images/background/register.png')}/>
                <View style={styles.foregroundView}>
                    <TouchableOpacity style={styles.backView} onPress={goBack}>
                        <Text style={styles.backButton}>Back</Text>
                    </TouchableOpacity>
                    <View style={styles.helloView}>
                        <Text style={styles.hello}>Hi {words(name)[0]}</Text>
                    </View>
                    <View style={styles.formView}>
                        <TouchableOpacity
                            style={styles.dobView}
                            onPress={()=>{this.setDateModalVisible(true)}}
                        >
                            <Text style={styles.dobText}>{dob ? moment(dob).format("Do MMMM YYYY") : "Date of Birth"}</Text>
                        </TouchableOpacity>
                        <Modal
                            mode={"date"}
                            date={dob ? dob : new Date()}
                            isVisible={this.state.datePickerVisible}
                            onConfirm={this.handleDatePicked}
                            onCancel={()=>{this.setDateModalVisible(false)}}
                        />
                        <TextField
                            {...formFieldStyle}
                            label={"City"}
                            value={"Brighton"}
                            onChangeText={() => {}}
                            disabled={true}
                        />
                    </View>
                    <View style={styles.nextView}>
                        {awaitingServerResponse ?
                            <ActivityIndicator color="white"/> :
                            <Button
                                containerStyle={styles.nextButtonContainer}
                                style={styles.nextButtonText}
                                onPress={next}>
                                Next
                            </Button>
                        }
                    </View>
                </View>
            </View>
        )
    }


    setDateModalVisible = (boolean) => {
        this.setState({datePickerVisible: boolean});
    };

    handleDatePicked = (date) => {
        this.setDateModalVisible(false);
        this.props.updateDob(date);
    };
}

const flexValues = {
    backButton: 1,
    hello: 1,
    details: 5,
    next: 1
};

const styles = StyleSheet.create({
    pageView: {
        flex: 1,
    },
    foregroundView: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingLeft: 32,
        paddingRight: 32,
        paddingTop: 50
    },
    backView: {
        flex: flexValues.backButton,
        alignSelf: 'flex-start'
    },
    backButton: {
        fontSize: 18,
        color: styleGuide.colorPalette.white,
        fontFamily: 'Montserrat-Light'
    },
    helloView: {
        flex: flexValues.hello,
    },
    hello: {
        fontSize: 36,
        lineHeight: 60,
        textAlign: "center",
        color: styleGuide.colorPalette.white,
        fontFamily: 'SignPainter-HouseScript'
    },
    formView: {
        flex: flexValues.details,
        flexDirection: 'column',
        width: '90%',
    },
    nextView: {
        flex: flexValues.next
    },
    nextButtonContainer: {
        width: 151,
        height: 29,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: styleGuide.colorPalette.white,
        borderRadius: 1,
        borderStyle: 'solid',
        borderWidth: 1
    },
    nextButtonText: {
        color: styleGuide.colorPalette.white,
        fontFamily: 'Montserrat-Light',
        fontSize: 14
    },
    dobView: {
        height: 24,
        borderBottomColor: 'rgba(255,255,255,0.5)',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 1
    },
    dobText: {
        fontFamily: 'Montserrat-Light',
        fontSize: 12,
        color: 'white'
    }
});

const formFieldStyle = {
    tintColor: styleGuide.colorPalette.white,
    textColor: styleGuide.colorPalette.white,
    baseColor: "rgba(255,255,255,0.6)",
    fontSize: 12, //actual text input
    titleFontSize: 10, //floating text
    labelFontSize: 10, //placeholder text
    labelHeight: 24
};