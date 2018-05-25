import axios from 'axios'
import {FETCH_CAR_DETAIL,FETCH_CAR_DETAIL_FAILURE,ADD_OFFER,ADD_OFFER_FAILURE} from './../actions/types';


var initialState =  {
  errors:null,
  car_data:null,
  offer_popup:null,
};

export default function(state = initialState, action) {
  switch (action.type) {

      case FETCH_CAR_DETAIL:
      //console.log('reducer',action.payload.data);
      return {
        ...state,
        car_data:action.payload.data,
        errors:null,
        offer_popup:null
      }
      case FETCH_CAR_DETAIL_FAILURE:
      return {
        ...state,
        car_data:null,
        errors:action.payload.error,
        offer_popup:null
      }
      case ADD_OFFER:
      return {
        ...state,
        car_data:action.payload.data,
        errors:null,
        offer_popup:false,
      }
      case ADD_OFFER_FAILURE:
      return {
        ...state,
        car_data:null,
        errors:action.payload.error,
        offer_popup:null
      }
    default:
			return {...state};
  }
}