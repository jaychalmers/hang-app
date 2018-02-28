import React from 'react';
import {Image} from 'react-native';
import {TabNavigator, TabBarBottom} from 'react-navigation';
import {styles, tabBar, tabBarIcon} from "styles";

//Home Screens
import Map from "/scenes/home/map";
import Groups from "/scenes/home/groups";
import Events from "/scenes/home/events";
import Profile from "/scenes/home/profile";

export default TabNavigator(
    {
        Map: {
            screen: Map,
            navigationOptions: {
                tabBarLabel: 'Map',
                tabBarIcon: ({focused, tintColor}) => {
                    return <Image
                        style={{tintColor: tintColor, ...tabBarIcon}}
                        source={require('../../static/images/icons/home.png')}/>
                }
            }
        },
        Groups: {
            screen: Groups,
            navigationOptions: {
                tabBarLabel: 'Groups',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Image
                        style={{tintColor: tintColor,...tabBarIcon}}
                        source={require('../../static/images/icons/group-profile-users.png')}/>
                )
            }

        },
        Events: {
            screen: Events,
            navigationOptions: {
                tabBarLabel: 'Events',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Image
                        style={{tintColor: tintColor,...tabBarIcon}}
                        source={require('../../static/images/icons/calendar2.png')}/>
                )
            }

        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                tabBarLabel: 'Profile',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Image
                        style={{tintColor: tintColor,...tabBarIcon}}
                        source={require('../../static/images/icons/man-user.png')}/>
                )
            }

        }
    },
    {
        tabBarPosition: 'bottom',
        tabBarComponent: TabBarBottom,
        swipeEnabled: false,
        animationEnabled: false,
        backBehaviour: 'none',
        tabBarOptions: {
            activeTintColor: tabBar.activeTintColor,
            inactiveTintColor: tabBar.inactiveTintColor,
            style: styles,
            showLabel: false
        }
    }
);
