import { TabNavigator, TabBarBottom } from "react-navigation";
import {styles,tabBar} from './style';

import Home from './../home/home';
import Groups from './../groups/groups';
import Events from './../events/events';
import Profile from './../profile/profile';

const HomeNavigator = TabNavigator(
    {
        Home: {screen: Home},
        Groups: {screen: Groups},
        Events: {screen: Events},
        Profile: {screen: Profile}
    },
    {
        tabBarPosition: 'bottom',
        tabBarComponent: TabBarBottom,
        showLabel: false,
        swipeEnabled: false,
        animationEnabled: false,
        backBehaviour: 'none',
        tabBarOptions: {
            activeTintColor: tabBar.activeTintColor,
            inactiveTintColor: tabBar.inactiveTintColor,
            style: styles
        }
    }
);

export default HomeNavigator;