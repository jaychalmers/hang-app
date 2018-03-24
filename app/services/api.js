import axios from 'axios';
import {SERVER} from '../config/constants';

const fetcher = axios.create({
    baseURL: SERVER,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const post = (route, options) => {
    return fetcher.post(route,options)
        .then((res)=>{
            return res.data;
        }).catch((error) => {
            console.log(error.response.data.error);
            throw error;
    })
};

export const get = (route) => {
    return fetcher.get(route)
        .then((res)=>{
            return res.data;
        }).catch((error) => {
            console.log(error.response.data.error);
            throw error;
        })
};