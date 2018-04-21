import React from 'react';
import { TabNavigator, TabBarTop } from "react-navigation";
import {Image} from 'react-native';

import Description from './../descriptionTab/descriptionTab';
import People from './../peopleTab/peopleTab';
import Photos from './../photosTab/photosTab';
/*
import Planner from './../plannerTab/plannerTab';
import Chat from './../chatTab/chatTab';
*/
import styleGuide from "./../../../../config/styles";

const tabBar = {
    activeTintColor: styleGuide.colorPalette.white,
    inactiveTintColor: styleGuide.colorPalette.uglyBlue,
    indicatorStyle: {
        width: 0,
        height: 0
    }
};

const tabBarIcon = {
    width: 20,
    height: 20
};

const styles = {
    backgroundColor: styleGuide.colorPalette.prussianBlue,
    height: 55
};

const MyNavigator = TabNavigator(
    {
        Description: {
            screen: Description,
            navigationOptions: {
                tabBarLabel: 'Description',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Image
                        style={{tintColor: tintColor,...tabBarIcon}}
                        source={require('./../../../../../static/images/icons/list.png')}/>
                )
            }
        },
        /*Planner: {
            screen: Planner,
            navigationOptions: {
                tabBarLabel: 'Planner',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Image
                        style={{tintColor: tintColor,...tabBarIcon}}
                        source={require('./../../../../../static/images/icons/set-alarm.png')}/>
                )
            }
        },*/
        Photos: {
            screen: Photos,
            navigationOptions: {
                tabBarLabel: 'Photos',
                tabBarIcon: ({focused, tintColor}) => (
                    <Image
                        style={{tintColor: tintColor, ...tabBarIcon}}
                        source={require('./../../../../../static/images/icons/photo-of-a-landscape.png')}/>
                )
            }
        },
        People: {
            screen: People,
            navigationOptions: {
                tabBarLabel: 'People',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Image
                        style={{tintColor: tintColor,...tabBarIcon}}
                        source={require('./../../../../../static/images/icons/man-user.png')}/>
                )
            }
        },/*
        Chat: {
            screen: Chat,
            navigationOptions: {
                tabBarLabel: 'Photos',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Image
                        style={{tintColor: tintColor,...tabBarIcon}}
                        source={require('./../../../../../static/images/icons/comment.png')}/>
                )
            }
        }*/
    },
    {
        tabBarPosition: 'top',
        tabBarComponent: TabBarTop,
        swipeEnabled: true,
        animationEnabled: true,
        backBehaviour: 'none',
        tabBarOptions: {
            activeTintColor: tabBar.activeTintColor,
            inactiveTintColor: tabBar.inactiveTintColor,
            indicatorStyle: tabBar.indicatorStyle,
            showIcon: true,
            style: styles,
            showLabel: false
        }
    }
);

export default class extends React.Component {
    render(){
        const {event,attendees,navigation} = this.props;
        return (
            <MyNavigator screenProps={{event,attendees,navigation}}/>
        )
    }
}