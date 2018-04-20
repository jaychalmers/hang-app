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