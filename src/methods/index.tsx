import axios from 'axios';
import { FETCHDATA_FAILURE, FETCHDATA_SUCCESS, POSTDATA_FAILURE, POSTDATA_SUCCESS } from '../Action';

const SERVER_URL= "http://localhost:8000/api/"
export const commonGet = async (url:string,params:Object) => {
    try {
        const resp = await axios.get(SERVER_URL + url,{params:params?params:{}});
        return resp
    } catch (err) {
        console.log(err)
        return err;
    }
}

export const commonPost = async (url:string, body:any) => {
    try {
        const resp = await axios.post(SERVER_URL + url, body);
        return resp
    } catch (err) {
        console.log(err)
        return err;
    }
}


