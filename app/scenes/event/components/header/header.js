import React from 'react';
import {Text,View,Image,TouchableOpacity,StyleSheet} from 'react-native';
import Bookmark from './bookmark';
import styleGuide from "./../../../../config/styles";

export default class extends React.Component {
    render(){
        const {
            title,
            attendance,
            price,
            navigateBack,
            navigateHome,
            distance,
            image,
            bookmark,
            bookmarked
        } = this.props;
        return (
            <View style={styles.headerView}>
                <View style={styles.bgImageContainer}>
                    <Image
                        style={styles.bgImage}
                        source={{uri: image}}
                        resizeMode='cover'
                    />
                    <View style={styles.overlay}/>
                </View>
                <View style={styles.topView}>
                    <TouchableOpacity onPress={navigateBack}>
                        <Image style={styles.backButton} source={require('./../../../../../static/images/icons/left-arrow.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={navigateHome}>
                        <Image style={styles.homeButton} source={require('./../../../../../static/images/icons/home.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.midView}>
                    <Text style={styles.eventName}>{title}</Text>
                    <Text style={styles.attendance}>{attendance} {(attendance === 1) ? "person" : "people"} going</Text>
                </View>
                <View style={styles.bottomView}>
                    <Bookmark bookmarked={bookmarked} bookmark={bookmark}/>
                    <View style={styles.bottomRightView}>
                        <Text style={styles.price}>{price}</Text>
                        <Text style={styles.distance}>{distance ? `${distance} miles` : ""}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const flexValues = {
    top: 1,
    middle: 2,
    bottom: 1
};

const styles = StyleSheet.create({
    headerView: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    topView: {
        flex: flexValues.top,
        width: '92%',
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    midView: {
        flex: flexValues.middle,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomView: {
        flex: flexValues.bottom,
        width: '86%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bottomRightView: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bgImageContainer: {
        alignSelf: 'flex-start',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
    },
    bgImage: {
        width: null,
        height: null,
        flex: 1
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        backgroundColor: styleGuide.colorPalette.uglyBlue,
        opacity: 0.65
    },
    backButton: {
        width: 23,
        height: 23,
        tintColor: styleGuide.colorPalette.white,
    },
    homeButton: {
        width: 19,
        height: 19,
        tintColor: styleGuide.colorPalette.white
    },
    eventName: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 20,
        color: styleGuide.colorPalette.white,
        backgroundColor: 'transparent',
    },
    attendance: {
        fontFamily: 'Montserrat-Light',
        fontSize: 10,
        color: styleGuide.colorPalette.white,
        backgroundColor: 'transparent'
    },
    price: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 18,
        color: styleGuide.colorPalette.white,
        backgroundColor: 'transparent'
    },
    distance: {
        fontFamily: 'Montserrat-Light',
        fontSize: 10,
        color: styleGuide.colorPalette.white,
        backgroundColor: 'transparent'
    }
});