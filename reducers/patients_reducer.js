import moment from 'moment';
import {
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
} from '../actions/types';
let data = null;
export default function(state = [], action) {

	switch (action.type) {
		case FETCH_PATIENTS_LIST_SUCCESS:
			return {...state,patientsListArray:action.payload}
		case FETCH_PATIENTS_LIST_FAILURE:
			return {...state, error: "failed to fetch", patientsListArray: ""};
		case FETCH_PATIENTS_DETAILS_LIST_SUCCESS:
			return {...state,patientdetailPainScore:action.payload}
		case FETCH_PATIENTS_DETAILS_LIST_FAILURE:
			return {...state, error: "failed to fetch", patientdetailPainScore: ""};
		case FETCH_PATIENT_TYPE_SUCCESS:
			return {...state,patientType:action.payload}
		case FETCH_PAIN_REGIONS_LIST_SUCCESS:
			return {...state,painRegionsList:action.payload}
		case FETCH_ALARM_TONES_SUCCESS:
			return {...state,alarmTonesList:action.payload}
		case FETCH_PAIN_SCORE_BY_ID_SUCCESS:
			return {...state,painScoreList:action.payload}
		case FETCH_PAIN_SCORE_BY_ID_FAILURE:
			return {...state,painScoreList: " ", error: ""}
		case UPDATE_PATIENT_STATUS_SUCCESS:
		    return { ...state, patientsListArray: action.payload};
		case UPDATE_PATIENT_STATUS_FAILURE:
			return { ...state, deleteid: "", error: action.payload  };
		case FETCH_QUESTIONS_LIST_BY_ID_SUCCESS:
			return { ...state, questionsList: action.payload};
		case FETCH_PATIENT_INFO_BY_ID_SUCCESS:
			 [ data ]= action.payload;
			 //console.log("==========data")
			 //console.log(data)
           let startdate= new moment(data.start_date, 'YYYY-MM-DD').format('YYYY-MM-DD');
           let enddate= new moment(data.end_date, 'YYYY-MM-DD').format('YYYY-MM-DD');
           let reminderTime = new moment(data.reminder_time, 'YYYY-MM-DD hh:mm A').format('hh:mm A')
           let alarmactive;
           let reminderactive;
           if(data.alarm_status == "On" ){
		        reminderactive = true
		    }else{
		        reminderactive = false
		    }
		    if(data.sound_status == "On" ){
		        alarmactive = true
		    }else{
		        alarmactive = false
		    }
          return { ...state,
              patientname: data.patient_name,
              patient_type: data.patient_type,
              pain_regions: data.pain_regions,
              start_date:startdate,
              end_date: enddate,
              reminder_active: reminderactive,
              alarm_active: alarmactive,
              reminder_Time: reminderTime,
              file_display_text: data.file_display_text
          };
		case FETCH_PATIENT_INFO_BY_ID_FAILURE:
			return {...state, error: "" }
		case ENROLL_PAITENT_SUCCESS:
			return { ...state, message: action.payload};
		case ENROLL_PAITENT_FAILURE:
			return { ...state, message: ""};
		case FETCH_PATIENT_IMAGES_SUCCESS:
			return { ...state, patientImagesArr: action.payload};
    	case FETCH_PATIENT_IMAGES_FAILURE:
    		return { ...state, error: ""};
		default:
			return state;
	}
}
