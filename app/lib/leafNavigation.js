import { NavigationActions } from 'react-navigation';

export function navigateBack(navigation) {
    const back = NavigationActions.back();
    navigation.dispatch(back);
}

export function navigateHome(navigation) {
    const home = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'Home'})],
    });
    navigation.dispatch(home);
}

export function navigateToUser(navigation, id) {
    const {navigate} = navigation;
    navigate('User',{userID: id});
}

export function navigateToEvent(navigation, id, location = null) {
    const {navigate} = navigation;
    navigate('Event',{eventID: id, location: location});
}

export function navigateToGroup(navigation, id) {
    const {navigate} = navigation;
    navigate('Group',{groupID: id});
}