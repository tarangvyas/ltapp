import axios from './../components/axios';
import Router from 'next/router';
import {
    ROOT_URL,
    PREFERENCE_MODEL_LIST,PREFERENCE_MODEL_LIST_FAILURE,
    SET_PREFERENCE_SUCCESS,SET_PREFERENCE_FAILURE,
    VIEW_PREFERENCE,VIEW_PREFERENCE_FAILURE
} from './types';


export function Fetchmodellist(token)
{
	return function (dispatch) {
        if(token){
            axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
        }
	    axios.get(`${ROOT_URL}/modellist`)
	      .then(response => {
	          dispatch({
	              type: PREFERENCE_MODEL_LIST,
	              payload: response.data,
	          });
	      }) .catch(response => {
	          dispatch({
	              type: PREFERENCE_MODEL_LIST_FAILURE,
	              payload: response,
	          });

	  });
  }
}


export function setPreference(data,token){

    return function(dispatch) {
        if(token){
             axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
        }
        
        axios.post(`/addprefrence`,data)
            .then(response => {
             if(response.data.success){
                dispatch({
                    type: SET_PREFERENCE_SUCCESS,
                    payload: response.data
                });
             }else{
                dispatch({
                    type: SET_PREFERENCE_FAILURE,
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

export function FetchContent(token)
{
	return function (dispatch) {
        if(token){
            axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
        }
	    axios.get(`${ROOT_URL}/myprefrence`)
	      .then(response => {
	          dispatch({
	              type: VIEW_PREFERENCE,
	              payload: response.data,
	          });
	      }) .catch(response => {
	          dispatch({
	              type: VIEW_PREFERENCE_FAILURE,
	              payload: response,
	          });

	  });
  }
}
