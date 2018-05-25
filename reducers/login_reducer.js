import axios from 'axios'
import {REQUEST_LOGIN,LOGIN_SUCCESS,LOGIN_FAILURE,CHANGE_PASSWORD_SUCCESS,CHANGE_PASSWORD_FAILURE,LOGOUT_SUCCESS,LOGOUT_FAILURE} from './../actions/types';
import { setCookie, getCookie, removeCookie, getClientCookie } from "./../lib/session";
let isLogin = false;
let  token = getClientCookie('jwt');
if(token){
  isLogin = true;
}

var initialState =  {
  isLogin:isLogin,
  message:"",
  token:token,
  user:null,
  data:null
};

export default function(state = initialState, action) {
  switch (action.type) {
      case LOGIN_SUCCESS:
      return {
        ...state,
        isLogin:true,
        token:action.payload.token,
        user:action.payload.user_data,
        message:""
      }
      case LOGIN_FAILURE:
      return {
        ...state,
        isLogin:false,
        token:null,
        user:null,
        message: action.payload
      }
      case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        data:action.payload,
        message:""
      }
      case CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        data:action.payload,
        message: ""
      }
      case LOGOUT_SUCCESS:
      return {
        ...state,
        isLogin:false,
        token:null,
        user:null,
      }
      case LOGOUT_FAILURE:
      return {
        ...state,
      }
    default:
			return {...state};
  }
}