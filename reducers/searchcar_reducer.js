import axios from 'axios'
import {SEARCH_CAR_LIST,SEARCH_CAR_LIST_FAILURE,FETCH_MAKE_LIST,FETCH_MAKE_LIST_FAILURE,
FETCH_MODEL_LIST,FETCH_MODEL_LIST_FAILURE,
} from './../actions/types';


var initialState =  {
  errors:null,
  car_data:null,
  make_list:null,
  model_list:null,
  filter:[{field:'search',q:''},{field:'make_id',q:''},{field:'model_id',q:''}],
  page:1,
  sortBy:null,
  order:null,
  networkerror:false,
  isProcessing:false
};

export default function(state = initialState, action) {
  switch (action.type) {
      case SEARCH_CAR_LIST:
      return {
        ...state,
        car_data:action.payload,
        errors:null
      }
      case SEARCH_CAR_LIST_FAILURE:
      return {
        ...state,
        car_data:null,
        errors:action.payload.error
      }
      case FETCH_MAKE_LIST:
      return {
        ...state,
        make_list:action.payload,
        errors:null
      }
      case FETCH_MAKE_LIST_FAILURE:
      return {
        ...state,
        make_list:null,
        errors:action.payload.error
      }
      case FETCH_MODEL_LIST:
      return {
        ...state,
        model_list:action.payload,
        errors:null
      }
      case FETCH_MODEL_LIST_FAILURE:
      return {
        ...state,
        model_list:null,
        errors:action.payload.error
      }
    default:
			return {...state};
  }
}