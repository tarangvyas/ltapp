import axios from 'axios';
import Router from 'next/router';
import {
    ROOT_URL,
    VIEW_CMS_DETAIL,VIEW_CMS_DETAIL_FAILURE
} from './types';
let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Accept": 'application/json',
        'Access-Control-Allow-Origin': '*',
        "mode": 'no-cors',
    }
  };

export function Fetchcontent(page_name){
  
  return function (dispatch) {
      axios.get(`${ROOT_URL}/page/`+page_name,axiosConfig)
          .then(response => {
            
              dispatch({
                  type: VIEW_CMS_DETAIL,
                  payload: response.data,
              });
          }) .catch(response => {
              dispatch({
                  type: VIEW_CMS_DETAIL_FAILURE,
                  payload: response,
              });
          })
  }
}