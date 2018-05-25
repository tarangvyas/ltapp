import axios from 'axios';
import Router from 'next/router';
import moment from 'moment';
import {
    ROOT_URL,
  	FETCH_PATIENTS_LIST_FAILURE,
  	FETCH_PATIENTS_LIST_SUCCESS,
    FETCH_PATIENTS_DETAILS_LIST_FAILURE,
    FETCH_PATIENTS_DETAILS_LIST_SUCCESS,
    FETCH_PATIENT_TYPE_SUCCESS,
    FETCH_PAIN_REGIONS_LIST_SUCCESS,
    FETCH_ALARM_TONES_SUCCESS,
    FETCH_PAIN_SCORE_BY_ID_SUCCESS,
    FETCH_PAIN_SCORE_BY_ID_FAILURE,
    UPDATE_PATIENT_STATUS_SUCCESS,
    UPDATE_PATIENT_STATUS_FAILURE,
    FETCH_PATIENT_INFO_BY_ID_SUCCESS,
    FETCH_PATIENT_INFO_BY_ID_FAILURE,
    ENROLL_PAITENT_SUCCESS,
    ENROLL_PAITENT_FAILURE,
    FETCH_PATIENT_IMAGES_SUCCESS,
    FETCH_PATIENT_IMAGES_FAILURE,

    FETCH_QUESTIONS_LIST_BY_ID_SUCCESS
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


export function getPaitentsList() {
 return function (dispatch) {

        let upload = request.post(configURL_getPatientList)
            .field('requestKey', requestKey)
            .field('clientType', clientType);
        upload.end((err, response) => {
            if (err) {
                dispatch({
                    type: FETCH_PATIENTS_LIST_FAILURE,
                    payload: "failed to fetch"
                })
                return;
            }
            if (response) {
                //console.log(response.body.result.visits)
                dispatch({
                    type: FETCH_PATIENTS_LIST_SUCCESS,
                    payload: response.body.result.visits
                });
                return;
            }
        });
    }
}


export function getPaitentPainScorebyID(pid) {
     let arrayofAllVisits = [];
 return function (dispatch) {
        let upload = request.post(configURL_getVisits)
            .field('patientId', pid)
            .field('requestKey', requestKey)
            .field('clientType', clientType);
        upload.end((err, response) => {
            if (err) {
                dispatch({
                    type: FETCH_PATIENTS_DETAILS_LIST_FAILURE,
                    payload: "failed to fetch"
                })
                return;
            }
            if (response) {
            let totalVisits = response.body.result.visits.length;
              response.body.result.visits.map(vstid => {
                let upload = request.post(configURL_getVisitById)
                .field('visitId', vstid.id)
                .field('requestKey', requestKey)
                .field('clientType', clientType);
                upload.end((err, response) => {
                    if (err) {
                        dispatch({
                            type: FETCH_PATIENTS_DETAILS_LIST_FAILURE,
                            payload: "failed to fetch"
                        })
                        return;
                    }
                    if (response) {
                        arrayofAllVisits.push(response.body.result.visit);
                        if(totalVisits === arrayofAllVisits.length){
                            dispatch({
                                type: FETCH_PATIENTS_DETAILS_LIST_SUCCESS,
                                payload: arrayofAllVisits
                            });
                        }
                        return;
                    }
                });
                return;
            })
            }
        });
    }
}
export function fetchPatientType(){
        return function(dispatch) {
            dispatch({
                type: FETCH_PATIENT_TYPE_SUCCESS,
                payload: ['Permanent','Trial']
            });
        }
}
export function getAllPainRegionsList(){
        return function(dispatch) {
            dispatch({
                type: FETCH_PAIN_REGIONS_LIST_SUCCESS,
                payload: [
                      { value: 'Lower Back', label: 'Lower Back' },
                      { value: 'Left Leg', label: 'Left Leg' },
                      { value: 'Right Leg', label: 'Right Leg' },
                      { value: 'Bilateral Leg', label: 'Bilateral Leg' },
                      { value: 'Left Foot', label: 'Left Foot' },
                      { value: 'Right Foot', label: 'Right Foot' },
                      { value: 'Bilateral Feet', label: 'Bilateral Feet' },
                      { value: 'Left Buttock', label: 'Left Buttock' },
                      { value: 'Right Buttock', label: 'Right Buttock' },
                      { value: 'Bilateral Buttock', label: 'Bilateral Buttock' }
                      ]
            });
        }
}

export function fetchAlarmTones(){
        return function(dispatch) {
            dispatch({
                type: FETCH_ALARM_TONES_SUCCESS,
                payload: ['Sonar','Tomorrow','Time Up','Scampering Tone','Morning']
            });
        }
}
export function resetMessage(){
        return function(dispatch) {
            dispatch({
                type: ENROLL_PAITENT_FAILURE
            });
        }
}
export function enrollNewPatient({serialno,patientID,patientname,start_date,patient_type,end_date,pain_regions,reminder_time,file_display_text,file_path,showReminder,showsound}) {
if(showReminder == true ){
        showReminder = "On"
    }else{
        showReminder = "Off"
    }
    if(showsound == true ){
        showsound = "On"
    }else{
        showsound = "Off"
    }
start_date = new moment(start_date).format('YYYY-MM-DD');
end_date = new moment(end_date).format('YYYY-MM-DD');
//reminder_time = new moment(reminder_time, 'hh:mm A').format('hh:mm A');
    return function(dispatch) {
        axios.post(`${ROOT_URL}/addNewPatient`,
            {serialno,patientID,patientname,start_date,patient_type,end_date,pain_regions,reminder_time,file_display_text,file_path,showReminder,showsound})
            .then(response => {
                //Router.push({pathname: '/'})
            dispatch({
                type: ENROLL_PAITENT_SUCCESS,
                payload: response.data.message,
              });
            })
            .catch(()=>
             {
               dispatch({
                  type: ENROLL_PAITENT_FAILURE
                });
            });
    }
}


export function fetchallPatientsList() {

    return function (dispatch) {
        axios.get(`${ROOT_URL}/fetchAllPatientsList`)
            .then(response => {
                dispatch({
                    type: FETCH_PATIENTS_LIST_SUCCESS,
                    payload: response.data.list,
                });
            }) .catch(response => {
                dispatch({
                    type: FETCH_PATIENTS_LIST_FAILURE,
                    payload: response,
                });
            })
    }
}
export function fetchPaitentPainScorebyID(id) {
    return function (dispatch) {
        axios.get(`${ROOT_URL}/fetchPaitentPainScorebyID?id=${id}`)
            .then(response => {
                dispatch({
                    type: FETCH_PAIN_SCORE_BY_ID_SUCCESS,
                    payload: response.data.list,
                });
            }) .catch(response => {
                dispatch({
                    type: FETCH_PAIN_SCORE_BY_ID_FAILURE,
                    payload: response,
                });
            })
    }
}

export function changeStatusOfPatientByID( id,Changestatus ) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/updatePatientStatus`, { id, Changestatus })
            .then(response => {
                dispatch({
                    type: UPDATE_PATIENT_STATUS_SUCCESS,
                    payload: response.data.list.rows,
                })
            }).catch(() => {
                dispatch({ type: UPDATE_PATIENT_STATUS_FAILURE });
            });
    }
}
export function updateRemiderInfo(patientId,showReminder,alarmTime,snooze,showsound,soundtone) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/updatePatientReminderInfo`,
     {patientId,showReminder,alarmTime,snooze,showsound,soundtone})
      .then(response => {
       // console.log(response)
      })
      .catch((error) => {
       // console.log(error)
      });

  }
}
export function fetchSurveyQuestions(id){
    return function (dispatch) {
        axios.get(`${ROOT_URL}/fetchSurveyQuestions?patientid=${id}`)
            .then(response => {
                dispatch({
                    type: FETCH_QUESTIONS_LIST_BY_ID_SUCCESS,
                    payload: JSON.parse(response.data.list[0].QuestionsString)
                });
            }).catch(response => {
                //  dispatch({
                //     type: FETCH_QUESTIONS_LIST_BY_ID_FAILURE
                // });
            });
    }

}

export function updateQuestionList(patientid,questionsList,colortheme,surveyMode) {
    return function (dispatch) {
        axios.post(`${ROOT_URL}/updateQuestionsList`, {patientid,questionsList,colortheme,surveyMode})
            .then(response => {
               // dispatch({type: UPDATE_PROFILE_SUCCESS});
                //Actions.mainpage();
            })
            .catch(() => {
               // dispatch({type: UPDATE_PROFILE_FAILURE});
            });
    }
}

export const loginUser = (password) => {
    return (dispatch) => {
        axios.post(`${ROOT_URL}/signIn`, {password})
            .then(response => {
               // console.log(response);
            })
            .catch((response) => {
              //  console.log(response);
            });
    };
};

export function fetchReminderInfo(id){
    return function (dispatch) {
        axios.get(`${ROOT_URL}/fetchReminderInfo?patientid=${id}`)
            .then(response => {
                // dispatch({
                //     type: FETCH_REMINDER_INFO_BY_ID_SUCCESS,
                //     payload: response.data.list
                // });
            }).catch(response => {
                //  dispatch({
                //     type: FETCH_REMINDER_INFO_BY_ID_FAILURE,
                //     payload:response
                // });
            });
    }

}


export function fetchSelectedSurveyQuestions(id){
    return function (dispatch) {
        axios.get(`${ROOT_URL}/fetchSelectedSurveyQuestions?patientid=${id}`)
            .then(response => {
                // dispatch({
                //     type: FETCH_QUESTIONS_LIST_BY_ID_SUCCESS,
                //     payload: JSON.parse(response.data.list[0].QuestionsString)
                // });
            }).catch(response => {
                //  dispatch({
                //     type: FETCH_QUESTIONS_LIST_BY_ID_FAILURE
                // });
            });
    }

}

export function fetchPatientInfobyId(id) {
    return function (dispatch) {
        axios.get(`${ROOT_URL}/fetchPatientInfobyId?patientid=${id}`)
            .then(response => {
                dispatch({
                    type: FETCH_PATIENT_INFO_BY_ID_SUCCESS,
                    payload: response.data.list.rows
                });
            })
            .catch(response => {
                dispatch({
                    type: FETCH_PATIENT_INFO_BY_ID_FAILURE,
                });
            });
    }
}



export function editPatientInfo(patientid, {patientname, start_date, patient_type, end_date, pain_regions, remind_time,file_display_text,file_path,showReminder,showsound}) {
if(showReminder == true ){
        showReminder = "On"
    }else{
        showReminder = "Off"
    }
    if(showsound == true ){
        showsound = "On"
    }else{
        showsound = "Off"
    }
start_date = new moment(start_date).format('YYYY-MM-DD');
end_date = new moment(end_date).format('YYYY-MM-DD');
//remind_time = new moment(remind_time, 'hh:mm A').format('hh:mm A');
    return function (dispatch) {
        axios.post(`${ROOT_URL}/editPatientInfo`, {
            patientid,patientname, start_date, patient_type, end_date, pain_regions, remind_time,file_display_text,file_path,showReminder,showsound
        })
            .then(response => {
                Router.push({pathname: '/'})

            })
            .catch(response => {
                dispatch({
                    type: FETCH_PATIENT_INFO_BY_ID_FAILURE,
                });
            });
    }
}

export function fetchPatientImages(id) {
    return function (dispatch) {
        axios.get(`${ROOT_URL}/fetchPatientPainRegionImages?patientid=${id}`)
            .then(response => {
                dispatch({
                    type: FETCH_PATIENT_IMAGES_SUCCESS,
                    payload: response.data.list.rows
                });
            })
            .catch(response => {
                dispatch({
                    type: FETCH_PATIENT_IMAGES_FAILURE,
                });
            });
    }
}


export function submitSurevyResponses(ResponseString) {
    return function (dispatch) {
        axios.post(`${ROOT_URL}/submitSurveyResponses`, {
            ResponseString
        })
            .then(response => {
              //  console.log(response)
            })
            .catch(response => {
                // dispatch({
                //     type: FETCH_PATIENT_INFO_BY_ID_FAILURE,
                // });
            });
    }
}


export function fetchpainscoreforchart(id) {
    return function (dispatch) {
        axios.get(`${ROOT_URL}/fetchpainscoreforchart?patientid=${id}`)
            .then(response => {
                console.log(response.data.list)

            })
            .catch(response => {
                console.log(response)
            });
    }
}
