import React from 'react';
import {Text,View,Image,TouchableHighlight} from 'react-native';
import {tabBarIcon} from './../homeNavigator/style';
import {styles} from './style';
import Button from 'react-native-button';

class Groups extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Groups',
        tabBarIcon: ({ focused, tintColor }) => (
            <Image
                style={{tintColor: tintColor,...tabBarIcon}}
                source={require('./../../../static/images/icons/group-profile-users.png')}/>
        )
    };

    constructor(props){
        super(props);
        this.state = {
            gridView: true,
            discoverView: true
        };
    }

    renderButtonStrip(){
        const viewIcon = this.state.gridView ? require("./../../../static/images/icons/list.png") : require("./../../../static/images/icons/menu.png");
        const searchIcon = require("./../../../static/images/icons/musica-searcher.png");
        if (this.state.discoverView){
            return (
                <View style={styles.buttonView}>
                    <TouchableHighlight onPress={() => (this.setState({gridView: !this.state.gridView}))} style={styles.iconView}>
                        <Image source={viewIcon} style={styles.icon}/>
                    </TouchableHighlight>
                    <Button
                        onPress={()=>{}}
                        containerStyle={styles.activeButtonContainer}
                        style={styles.activeButtonText}>
                        Discover
                    </Button>
                    <Button
                        onPress={()=>{this.setState({discoverView: false})}}
                        containerStyle={styles.inactiveButtonContainer}
                        style={styles.inactiveButtonText}>
                        Joined
                    </Button>
                    <TouchableHighlight onPress={()=>{}} style={styles.iconView}>
                        <Image source={searchIcon} style={styles.icon}/>
                    </TouchableHighlight>
                </View>
            )
        } else {
            return (
                <View style={styles.buttonView}>
                    <TouchableHighlight onPress={() => (this.setState({gridView: !this.state.gridView}))} style={styles.iconView}>
                        <Image source={viewIcon} style={styles.icon}/>
                    </TouchableHighlight>
                    <Button
                        onPress={()=>{this.setState({discoverView: true})}}
                        containerStyle={styles.inactiveButtonContainer}
                        style={styles.inactiveButtonText}>
                        Discover
                    </Button>
                    <Button
                        onPress={()=>{}}
                        containerStyle={styles.activeButtonContainer}
                        style={styles.activeButtonText}>
                        Joined
                    </Button>
                    <TouchableHighlight onPress={()=>{}} style={styles.iconView}>
                        <Image source={searchIcon} style={styles.icon}/>
                    </TouchableHighlight>
                </View>
            )
        }
    }


    render() {
        return (
            <View style={styles.pageView}>
                <View style={styles.logoView}>
                    <Text style={styles.logo}>
                        Groups
                    </Text>
                </View>
                {this.renderButtonStrip()}
                <View style={styles.contentView}>
                    <Text>{this.state.gridView ? "Grid View" : "List View"}</Text>
                    <Text>{this.state.discoverView ? "Discover View" : "Joined View"}</Text>
                </View>
            </View>
        )
    }
}

export default Groups;