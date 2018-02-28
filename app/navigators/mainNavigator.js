import {StackNavigator} from 'react-navigation';

//Screens
import Home from "home"; //TabNavigator
import Calendar from "../scenes/calendar/calendar";
import Event from "../scenes/event/event";

export default StackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                title: 'Home'
            }
        },
        Calendar: {
            screen: Calendar,
            navigationOptions: {
                title: 'Calendar'
            }
        },
        Event: {
            screen: Event,
            navigationOptions: {
                title: 'Event'
            }
        }
    },
    {
        initialRoute: 'Home',
        headerMode: 'none'
    }
);