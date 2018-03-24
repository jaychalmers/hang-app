import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Platform,Picker} from 'react-native';
import SimplePicker from 'react-native-simple-picker';
import styleGuide from "../../../../config/styles";
import {CATEGORIES} from './../../../../config/constants';
const map = require('lodash/map');

export default class extends React.Component {
    constructor(props){
        super(props);
        props.setCategory(CATEGORIES[0]); //DEFAULT
    }

    //TODO: The picker could be made into a custom component, shared with groupLinker
    render(){
        const {
            setCategory
        } = this.props;
        const category = (this.props.category) ? this.props.category : CATEGORIES[0];
        return (
            <View style={styles.componentView}>
                <View style={styles.labelView}>
                    <Text style={styles.label}>Category</Text>
                </View>
                {this.createPicker(category)}
            </View>
        );
    }

    createPicker = (category) => {
        if (Platform.OS === 'ios'){
            return (
                <TouchableOpacity
                    style={styles.picker}
                    onPress={() => {this.refs.picker.show()}}
                >
                    <Text style={styles.pickerLabel}>{category}</Text>
                    <SimplePicker
                        ref={'picker'}
                        options={CATEGORIES}
                        onSubmit={(option) => {this.props.setCategory(option)}}
                        />
                </TouchableOpacity>
            )
        } else {
            //ANDROID
            return (
                <Picker
                    style={styles.picker}
                    onValueChange={(itemValue,itemPosition)=>{this.props.setCategory(itemValue)}}
                    prompt={"Pick a category"}
                >
                    {map(CATEGORIES,(cat)=>{
                        return <Picker.Item label={cat} value={cat}/>
                    })}
                </Picker>
            )
        }
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
