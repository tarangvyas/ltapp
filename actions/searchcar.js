import axios from './../components/axios';
import Router from 'next/router';
import {
    ROOT_URL,
    SEARCH_CAR_LIST,SEARCH_CAR_LIST_FAILURE,
    FETCH_MAKE_LIST,FETCH_MAKE_LIST_FAILURE,
    FETCH_MODEL_LIST,FETCH_MODEL_LIST_FAILURE,
} from './types';

export function loadData(params,token){
  return function (dispatch) {
      if(token){
             axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
        }
      axios.get(`${ROOT_URL}/carlist`+params)
          .then(response => {
            //console.log('action',response.data);
              dispatch({
                  type: SEARCH_CAR_LIST,
                  payload: response.data,
              });
          }) .catch(response => {
              dispatch({
                  type: SEARCH_CAR_LIST_FAILURE,
                  payload: response,
              });
          })
  }
}

export function Fetchmakelist(token){
      return function (dispatch) {
          if(token){
                 axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
          }
          axios.get(`${ROOT_URL}/makelist`)
              .then(response => {
                  let make_id=response.data.data[0].make_id;
                  dispatch(Fetchmodellist(make_id));

                  dispatch({
                      type: FETCH_MAKE_LIST,
                      payload: response.data,
                  });

              }) .catch(response => {
                  dispatch({
                      type: FETCH_MAKE_LIST_FAILURE,
                      payload: response,
                  });

              })
      }
}
export function Fetchmodellist(make_id)
{
	return function (dispatch) {
	    axios.get(`${ROOT_URL}/modellist?make_id=`+make_id)
	      .then(response => {
	          dispatch({
	              type: FETCH_MODEL_LIST,
	              payload: response.data,
	          });
	      }) .catch(response => {
	          dispatch({
	              type: FETCH_MODEL_LIST_FAILURE,
	              payload: response,
	          });

	  });
  }
}

export function Fetchmodellist1(token,make_id){
  
  return function (dispatch) {
     // alert(make_id);
      if(token){
             axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
      }
      axios.get(`${ROOT_URL}/modellist?make_id=`+make_id)
          .then(response => {
            //console.log(response);
              dispatch({
                  type: FETCH_MODEL_LIST,
                  payload: response.data,
              });
          }) .catch(response => {
              dispatch({
                  type: FETCH_MODEL_LIST_FAILURE,
                  payload: response,
              });

          })
  }
}