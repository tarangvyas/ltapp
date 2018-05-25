import axios from 'axios';
import Router from 'next/router';
import {
    ROOT_URL,
    ADD_DEVICE_SUCCESS,
    ADD_DEVICE_FAILURE,
    FETCH_DEVICES_LIST_SUCCESS,
    FETCH_DEVICES_LIST_FAILURE
} from './types';

var requestKey ='dev_visit_eFQVJq6UBptBFg43JGl17Y2jX+RFJmZ0I+u3OpUh2W4=';
var clientType = 'VisitClient';
import request from "superagent";
var configPFServer = 'devpfsyncserver1.nevro.org';
var configURL_getPatientList = 'https://' + configPFServer + '/ssclapiapp/ssvstapi/getAllBaselineVisits';
var configURL_getVisits = 'https://' + configPFServer + '/ssclapiapp/ssvstapi/getVisits';    //List of Visits
var configURL_getVisitById = 'https://' + configPFServer + '/ssclapiapp/ssvstapi/getVisit'; //Get Each Visit Detail
var requestKey ='dev_visit_eFQVJq6UBptBFg43JGl17Y2jX+RFJmZ0I+u3OpUh2W4=';
var clientType = 'VisitClient';



export function addNewDevice({deviceno}) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/addNewDevice`,
            {deviceno})
            .then(response => {
                //Router.push({pathname: '/'})
            dispatch({
                type: ADD_DEVICE_SUCCESS,
                payload: response.data.message,
              });
            })
            .catch(()=>
             {
               dispatch({
                  type: ADD_DEVICE_FAILURE
                });
            });
    }
}

export function fetchallDevicesList(){
  return function (dispatch) {
      axios.get(`${ROOT_URL}/fetchAllDevicesList`)
          .then(response => {
              dispatch({
                  type: FETCH_DEVICES_LIST_SUCCESS,
                  payload: response.data.list,
              });
          }) .catch(response => {
              dispatch({
                  type: FETCH_DEVICES_LIST_FAILURE,
                  payload: response,
              });
          })
  }
}
