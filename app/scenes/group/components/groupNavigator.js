import React from 'react';
import { TabNavigator, TabBarTop } from "react-navigation";
import {Image} from 'react-native';
import styleGuide from "./../../../config/styles";

import Description from './descriptionTab';
import Events from './eventsTab';
import Members from './membersTab';

const tabBar = {
    activeTintColor: styleGuide.colorPalette.reddishPink,
    inactiveTintColor: styleGuide.colorPalette.whiteTwo,
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
    backgroundColor: 'white',
    height: 55
};

const GroupNavigator = TabNavigator(
    {
        Description: {
            screen: Description,
            navigationOptions: {
                tabBarLabel: 'Description',
                tabBarIcon: ({focused, tintColor }) => (
                    <Image
                        style={{tintColor: tintColor,...tabBarIcon}}
                        source={require('./../../../../static/images/icons/list.png')}/>
                )
            }
        },
        Events: {
            screen: Events,
            navigationOptions: {
                tabBarLabel: 'Events',
                tabBarIcon: ({focused, tintColor }) => (
                    <Image
                        style={{tintColor: tintColor,...tabBarIcon}}
                        source={require('./../../../../static/images/icons/calendar.png')}/>
                )
            }
        },
        Members: {
            screen: Members,
            navigationOptions: {
                tabBarLabel: 'Members',
                tabBarIcon: ({focused, tintColor }) => (
                    <Image
                        style={{tintColor: tintColor,...tabBarIcon}}
                        source={require('./../../../../static/images/icons/group-profile-users.png')}/>
                )
            }
        }
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
        const {group,members,navigation,events} = this.props;
        return (
            <GroupNavigator screenProps={{group,members,navigation,events}}/>
        )
    }
}