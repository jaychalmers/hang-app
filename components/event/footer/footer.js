import React from 'react';
import {Text,View,Image,NativeModules,LayoutAnimation,TouchableOpacity} from 'react-native';
import {styles} from './style';

const { UIManager } = NativeModules;

class Footer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            attending: false,
            madeOption: false
        };
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    componentDidMount(){
    }

    _onPress = (choice) => {
        const animationConfig = {
            duration: 100,
            create: {
                type: LayoutAnimation.Types.linear,
                property: LayoutAnimation.Properties.scaleXY
            },
            update: {
                type: LayoutAnimation.Types.linear,
                property: LayoutAnimation.Properties.scaleXY
            },
        };
        LayoutAnimation.configureNext(animationConfig);
        //if you had already marked your attendance before pressing the button
        if (this.state.madeOption) {
            //then you must have clicked X in order to cancel your RSVP
            this.setState({madeOption: false, attending: false});
        } else {
            //otherwise you were indicating attendance
            this.setState({madeOption: true, attending: choice});
        }
    };

    render(){
        return (
            <View style={styles.footerView}>
                <View style={styles.optionLeft}>
                    <TouchableOpacity onPress={() => this._onPress(false)}>
                        <Image style={styles.cross} source={require('./../../../static/images/icons/delete.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.optionMiddle}>
                    <Text style={styles.optionText}>{this.state.madeOption ? this.state.attending ? "Attending" : "Not Attending" : "Are you attending?"}</Text>
                </View>
                <View style={this.state.madeOption ? styles.optionRightHidden : styles.optionRight}>
                    <TouchableOpacity onPress={() => this._onPress(true)}>
                        {this.state.madeOption ? (null) : (<Image style={styles.cross} source={require('./../../../static/images/icons/checked.png')}/>)}
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default Footer;