import {AsyncStorage} from 'react-native';
import {STORE} from "../config/constants";

const KEYS = [
    `${STORE}user`,
    `${STORE}token`,
];

export const saveLocalUser = async (details) => {
    try {
        await AsyncStorage.multiSet([
            [`${STORE}user`, details._id],
            [`${STORE}token`, details.token]
        ]);
    } catch (e) {
        throw e;
    }
    /*
    return AsyncStorage.multiSet([
        [`${STORE}id`,details._id],
        [`${STORE}token`,details.token]
    ],(error) => {
        if (error) throw new Error(error);
    });*/
};

export const loadLocalUser = async () => {
    const user = await AsyncStorage.multiGet(KEYS,(error) => {
        //TODO: Better error behaviour
        if (error) {
            error.map((error)=>console.log("AsyncStorage error: " + error));
        }
    });
    //TODO: Rethink this - I think you wanna check that the token is still valid before proceeding
    const id = user[0][1];
    const token = user[1][1];
    if (id && token) {
        return {
            id: id,
            token: token
        };
    } else {
        return null;
    }
};

export const deleteLocalUser = async () => {
    await AsyncStorage.multiRemove(KEYS);
};