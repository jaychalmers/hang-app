import React from 'react';
import {Image} from 'react-native';
import {TabNavigator, TabBarBottom} from 'react-navigation';
import {styles, tabBar, tabBarIcon} from "./styles";

/*
This Navigator is the home screen of the app, with the tab
bar along the bottom.
 */

//Home Screens
import Map from "./../scenes/home/map";
import Groups from "./../scenes/home/groups";
import Events from "./../scenes/home/events";
import Profile from "./../scenes/home/profile";

const CreatePlaceHolderScreen = class extends React.Component{
    render(){
        return null;
    }
};

export default class HomeNavigator extends React.Component {
    render(){
        const {user,authNav} = this.props.screenProps;
        const navigation = this.props.navigation; //mainNavigator
        //create a tab navigator, with access to the main navigator
        const createNavigator = (props) => {
            const MyNavigator = TabNavigator(
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
                    Create: {
                        screen: CreatePlaceHolderScreen,
                        navigationOptions: {
                            tabBarLabel: 'Create',
                            tabBarIcon: ({ focused, tintColor}) => (
                                <Image
                                    style={{tintColor: 'white',...tabBarIcon}}
                                    source={require('./../../static/images/icons/plus-black-symbol.png')}/>
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
                    tabBarComponent: ({jumpToIndex, ...props}) => {
                        return (
                            <TabBarBottom
                                {...props}
                                jumpToIndex={index => {
                                    if (index === 2) {
                                        navigate('Create');
                                    }
                                    else {
                                        jumpToIndex(index);
                                    }
                                }}
                            />
                        )},
                    swipeEnabled: false,
                    animationEnabled: false,
                    backBehaviour: 'none',
                    tabBarOptions: {
                        activeTintColor: tabBar.activeTintColor,
                        inactiveTintColor: tabBar.inactiveTintColor,
                        style: styles,
                        showLabel: false
                    },
                    navigationOptions: {
                        gesturesEnabled: false
                    }
                }
            );
            return <MyNavigator screenProps={props}/>;
        };
        return (
            createNavigator({user,mainNavigation: navigation,authNavigate: authNav})
        );
    }
}
