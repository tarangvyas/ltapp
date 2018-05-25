import axios from 'axios';
import Router from 'next/router';
import moment from 'moment';
import {
    ROOT_URL,
  	REGISTER_DEALER_SUCCESS,
  	REGISTER_DEALER_FAILURE,
} from './types';

export function registerNewDealer(postdata) {
    return function(dispatch) {
       // console.log("=====postdata in action",postdata);
        //return false;
        axios.post(`${ROOT_URL}/dealerregister`,postdata)
            .then(response => {
             if(response.data.success){
                dispatch({
                    type: REGISTER_DEALER_SUCCESS,
                    payload: response.data,
                });
             }else{
                dispatch({
                    type: REGISTER_DEALER_FAILURE,
                    payload: response.data,
                });
             }
            })
            .catch((error)=>
             {
               //console.log(error);
               //return false;  
               dispatch({
                  type: REGISTER_DEALER_FAILURE,
                  payload: error,
                });
            });
    }
}