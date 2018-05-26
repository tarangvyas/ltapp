import axios from 'axios';
import { setCookie, getCookie, removeCookie } from "./../lib/session";
import {
  ROOT_URL,
  LOGIN_SUCCESS,LOGIN_FAILURE,
  CHANGE_PASSWORD_SUCCESS,CHANGE_PASSWORD_FAILURE,
  LOGOUT_SUCCESS,LOGOUT_FAILURE,
} from './../actions/types';
let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Accept": 'application/json',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
  }
};

export function LoginRequest(postData) {
    return function(dispatch) {
        //alert('here in login action');
        axios.post(`${ROOT_URL}/login`,postData,axiosConfig)
            .then(response => {
              if(response.data.success){
                setCookie("jwt", response.data.token);
                dispatch({
                  type: LOGIN_SUCCESS,
                  payload: response.data,
                });
              }else{
                dispatch({
                  type: LOGIN_FAILURE,
                  payload: response.data,
                });
              }
            })
            .catch(()=>
             {
               dispatch({
                  type: LOGIN_FAILURE
                });
            });
    }
}

export function changePassword(postData,token) {
  return function(dispatch) {
      if(token){
            axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
      }

      axios.post(`${ROOT_URL}/changepassword`,postData)
          .then(response => {
            if(response.data.success){
              dispatch({
                type: CHANGE_PASSWORD_SUCCESS,
                payload: response.data,
              });
            }else{
              dispatch({
                type: CHANGE_PASSWORD_FAILURE,
                payload: response.data,
              });
            }
          })
          .catch(()=>
           {
             dispatch({
                type: CHANGE_PASSWORD_FAILURE
              });
          });
  }
}

export function logoutUser(token) {
  //console.log(token);
  return function(dispatch) {
      if(token){
            axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
      }

      axios.post(`${ROOT_URL}/logout`)
          .then(response => {
            if(response.data.success){
              dispatch({
                type: LOGOUT_SUCCESS,
                payload: response.data,
              });
            }else{
              dispatch({
                type: LOGOUT_FAILURE,
                payload: response.data,
              });
            }
          })
          .catch(()=>
           {
             dispatch({
                type: LOGOUT_FAILURE
              });
          });
  }
}