import {Alert} from 'react-native';

export const notImplemented = (feature) => {
    const description = feature ? feature : "that feature";
    return Alert.alert(
        'Feature not implemented!',
        `Sorry, ${description} isn't yet implemented.`,
        [
            {text: 'OK', onPress: () => {}}
        ]
    );
};

export const warning = (message) => {
    return Alert.alert(
        'Warning',
        `${message}`,
        [
            {text: 'OK', onPress: () => {}}
        ]
    );
};