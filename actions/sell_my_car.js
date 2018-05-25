import axios from './../components/axios';
import Router from 'next/router';
import moment from 'moment';
import {
    ROOT_URL,
  	LASTPOSTEDCAR_SUCCESS,
  	LASTPOSTEDCAR_FAILURE,
    SPECIFICATION_SUCCESS,
    SPECIFICATION_FAILURE,
    ADD_SPECIFICATION_SUCCESS,
	ADD_SPECIFICATION_FAILURE,
    ADD_CARIMAGE_SUCCESS,
    ADD_CARIMAGE_FAILURE,
    SELLMYCAR_SUCCESS,
    SELLMYCAR_FAILURE,
} from './types';

export function Unpublishcar(token) {
    return function(dispatch) {
        if(token){
             axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
        }
        //console.log("=====postdata in action",postdata);
        //return false;
        axios.get(`/myunpublishcar`)
            .then(response => {
             if(response.data.success){
                dispatch({
                    type: LASTPOSTEDCAR_SUCCESS,
                    payload: response.data,
                });
             }else{
                dispatch({
                    type: LASTPOSTEDCAR_FAILURE,
                    payload: response.data,
                });
             }
            })
            .catch((error)=>
             {
               //console.log(error);
               //return false;  
               dispatch({
                  type: LASTPOSTEDCAR_FAILURE,
                  payload: error,
                });
            });
    }
}
export function Specificationlist(token) {
    return function(dispatch) {
        if(token){
             axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
        }
        axios.get(`/specificationlist`)
            .then(response => {
             if(response.data.success){
                dispatch({
                    type: SPECIFICATION_SUCCESS,
                    payload: response.data
                });
             }else{
                dispatch({
                    type: SPECIFICATION_FAILURE,
                    payload: response.data
                });
             }
            })
            .catch((error)=>
             {
               //console.log(error);
               //return false;  
               dispatch({
                  type: SPECIFICATION_FAILURE,
                  payload: error,
                });
            });
    }
}


export function AddSpecification(token,data) {
    return function(dispatch) {
        if(token){
             axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
        }
        axios.post(`/specifications`,data)
            .then(response => {
             if(response.data.success){
                //dispatch(Specificationlist(token));
                dispatch({
                    type: ADD_SPECIFICATION_SUCCESS,
                    payload: response.data
                });
             }else{
                dispatch({
                    type: ADD_SPECIFICATION_FAILURE,
                    payload: response.data
                });
             }
            })
            .catch((error)=>
             {
               //console.log(error);
               //return false;  
               dispatch({
                  type: ADD_SPECIFICATION_FAILURE,
                  payload: error,
                });
            });
    }
}

export function Addcarimage(token,data) {
    return function(dispatch) {
        if(token){
             axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
        }
        axios.post(`/addcarimage`,data)
            .then(response => {
             console.log('addcarimage',response);   
             if(response.data.success){
                dispatch({
                    type: ADD_CARIMAGE_SUCCESS,
                    payload: response.data
                });
             }else{
                dispatch({
                    type: ADD_CARIMAGE_FAILURE,
                    payload: response.data
                });
             }
            })
            .catch((error)=>
             {
               dispatch({
                  type: ADD_CARIMAGE_FAILURE,
                  payload: error,
                });
            });
    }
}

export function sellMyCarAction(token,data) {
    return function(dispatch) {
        if(token){
             axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
        }
        axios.post(`/sellmycar`,data)
            .then(response => {
             console.log('sellmycar',response);   
             if(response.data.success){
                dispatch({
                    type: SELLMYCAR_SUCCESS,
                    payload: response.data
                });
             }else{
                dispatch({
                    type: SELLMYCAR_FAILURE,
                    payload: response.data
                });
             }
            })
            .catch((error)=>
             {
               dispatch({
                  type: SELLMYCAR_FAILURE,
                  payload: error,
                });
            });
    }
}
