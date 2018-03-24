import {AsyncStorage} from 'react-native';
import {STORE} from "../config/constants";

const keys = [
    `${STORE}user`,
    `${STORE}token`,
];

export const loadLocalUser = () => {
    AsyncStorage.multiGet(keys,(error,res) => {
        //TODO: Better error behaviour
        if (error) {
            error.map((error)=>console.log("AsyncStorage error: " + error));
            return null;
        } else {
            //TODO: Rethink this - I think you wanna check that the token is still valid before proceeding
            const id = res[0][1];
            const token = res[1][1];
            if (id && token) {
                return {id,token};
            } else {
                return null;
            }
        }
    });
};