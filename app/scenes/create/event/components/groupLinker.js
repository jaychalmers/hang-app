import React from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity,Alert,Picker,Platform} from 'react-native';
import SimplePicker from 'react-native-simple-picker';
import styleGuide from "../../../../config/styles";
const map = require('lodash/map');
const find = require('lodash/find');

export default class extends React.Component {
    render(){
        const {group,myGroups} = this.props;
        return (
            <View style={styles.groupLinker}>
                <Text style={styles.label}>Group</Text>
                {this.createPicker(group,myGroups)}
            </View>
        );
    }

    createPicker = (group,myGroups) => {
        if (Platform.OS === 'ios'){
            return (
                <TouchableOpacity
                    style={styles.textInputBox}
                    onPress={this.pressButton}
                >
                    {group ?
                        <Text style={styles.inputTextCompleted}>{group.name}</Text> :
                        <Text style={styles.inputTextPlaceholder}>Link this event to a group (Optional)</Text>
                    }
                    <SimplePicker
                        ref={'picker'}
                        options={map(myGroups,(group) => {return group.name})}
                        onSubmit={(option) => {this.chooseGroup(option);}}
                    />
                    <Image
                        style={styles.icon}
                        source={require('./../../../../../static/images/icons/down-arrow-inside-circle.png')}
                    />
                </TouchableOpacity>
            )
        } else {
            return (
                <Picker
                    style={styles.textInputBox}
                    onValueChange={(itemValue,itemPosition)=>{this.chooseGroup(itemValue);}}
                    enabled={(myGroups.length > 0)}
                    prompt={"Link with a group"}
                >
                    {map(myGroups,(groupItem)=>{
                        return (<Picker.Item label={groupItem.name} value={groupItem.name}/>)
                    })}
                </Picker>
            )
        }
    };

    chooseGroup = (groupName) => {
        const group = find(this.props.myGroups,{'name': groupName});
        this.props.setGroup(group);
    };

    pressButton = () => {
        if (this.props.myGroups.length > 0){
            this.refs.picker.show();
        } else {
            Alert.alert(
                "No Groups",
                "You do not have event creation privileges in any groups. Why not create your own group?",
                [
                    {text: 'OK', onPress: () => {}}
                ],
                {cancelable: true}
            );
        }
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
