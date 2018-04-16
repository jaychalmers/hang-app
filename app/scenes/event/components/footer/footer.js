import React from 'react';
import {
    Text,
    View,
    Image,
    NativeModules,
    LayoutAnimation,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import styleGuide from './../../../../config/styles';
const { UIManager } = NativeModules;

export default class extends React.Component {

    constructor(props){
        super(props);
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    setAttendingTo = (bool) => {
        const {setAttendingTo} = this.props;
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
        setAttendingTo(bool);
    };

    render(){
        const {attending} = this.props;
        return (
            <View style={styles.component}>
                {attending ?
                    <TouchableOpacity
                    style={styles.crossView}
                    onPress={()=> this.setAttendingTo(false)}
                    >
                        <Image style={styles.cross} source={require('./../../../../../static/images/icons/delete.png')}/>
                    </TouchableOpacity> : null
                }
                <View style={styles.labelView}>
                    <Text style={styles.labelText}>{attending ? "Attending" : "Are you attending?"}</Text>
                </View>
                {attending ? null :
                    <TouchableOpacity
                        style={styles.tickView}
                        onPress={()=> this.setAttendingTo(true)}
                    >
                        <Image style={styles.tick} source={require('./../../../../../static/images/icons/checked.png')}/>
                    </TouchableOpacity>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    component: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    crossView: {
        flex: 1,
        height: '75%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRightColor: 'rgba(255,255,255,0.5)',
        borderRightWidth: 1,
    },
    tickView: {
        flex: 1,
        height: '75%',
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftColor: 'rgba(255,255,255,0.5)',
        borderLeftWidth: 1,
    },
    iconHidden: {
        width: 0,
    },
    labelView: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    labelText: {
        fontFamily: 'Montserrat-Light',
        color: styleGuide.colorPalette.white,
        fontSize: 12,
    },
    cross: {
        width: 20,
        height: 20,
        tintColor: styleGuide.colorPalette.white,
    },
    tick: {
        width: 23,
        height: 23,
        tintColor: styleGuide.colorPalette.white
    }
});

