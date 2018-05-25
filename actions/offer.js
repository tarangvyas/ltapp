import axios from './../components/axios';
import Router from 'next/router';
import {
    ROOT_URL,
    LIVE_OFFERS_SUCCESS,LIVE_OFFERS_FAILURE,
    FETCH_OFFER_DETAIL,FETCH_OFFER_DETAIL_FAILURE,
    EDIT_OFFER,EDIT_OFFER_FAILURE
} from './types';

export function Fetchcontent(token){
  return function (dispatch) {
      if(token){
             axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
        }
      axios.get(`${ROOT_URL}/myliveoffers`)
          .then(response => {
            console.log('action',response.data);
              dispatch({
                  type: LIVE_OFFERS_SUCCESS,
                  payload: response.data,
              });
          }) .catch(response => {
              dispatch({
                  type: LIVE_OFFERS_FAILURE,
                  payload: response,
              });
          })
  }
}
export function Fetchoffercontent(id,token){
    return function (dispatch) {
        if(token){
               axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
          }
        axios.get(`${ROOT_URL}/offerdetail?id=`+id)
            .then(response => {
              console.log('action',response.data);
                dispatch({
                    type: FETCH_OFFER_DETAIL,
                    payload: response.data,
                });
            }) .catch(response => {
                dispatch({
                    type: FETCH_OFFER_DETAIL_FAILURE,
                    payload: response,
                });
            })
    }
  }

export function EditOffer(data,token){
    return function(dispatch) {
        if(token){
             axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
        }
        
        axios.post(`/makeoffer`,data)
            .then(response => {
             if(response.data.success){
                dispatch({
                    type: EDIT_OFFER,
                    payload: response.data
                });
             }else{
                dispatch({
                    type: EDIT_OFFER_FAILURE,
                    payload: response.data
                });
             }
            })
            .catch((error)=>
             {
               dispatch({
                  type: EDIT_OFFER_FAILURE,
                  payload: error,
                });
            });
    }
}