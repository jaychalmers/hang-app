import { TabNavigator, TabBarTop } from "react-navigation";
import {styles,tabBar} from './style';

import Description from './../description/description';
import Planner from './../planner/planner';
import Photos from './../photos/photos';

const EventTabNavigator = TabNavigator(
    {
        Description: {screen: Description},
        Planner: {screen: Planner},
        Photos: {screen: Photos}
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

export default EventTabNavigator;