import axios from './../components/axios';
import Router from 'next/router';
import {
    ROOT_URL,
    FETCH_CAR_DETAIL,FETCH_CAR_DETAIL_FAILURE,ADD_OFFER,ADD_OFFER_FAILURE
} from './types';

export function Fetchcontent(id,token){
  return function (dispatch) {
      if(token){
             axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
        }
      axios.get(`${ROOT_URL}/cardetail?id=`+id)
          .then(response => {
            //console.log('action',response.data);
              dispatch({
                  type: FETCH_CAR_DETAIL,
                  payload: response.data,
              });
          }) .catch(response => {
              dispatch({
                  type: FETCH_CAR_DETAIL_FAILURE,
                  payload: response,
              });
          })
  }
}

export function MakeOffer(data,token){
    return function(dispatch) {
        if(token){
             axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
        }
        
        axios.post(`/makeoffer`,data)
            .then(response => {
             if(response.data.success){
                dispatch({
                    type: ADD_OFFER,
                    payload: response.data
                });
             }else{
                dispatch({
                    type: ADD_OFFER_FAILURE,
                    payload: response.data
                });
             }
            })
            .catch((error)=>
             {
               dispatch({
                  type: ADD_OFFER_FAILURE,
                  payload: error,
                });
            });
    }
}