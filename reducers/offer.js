import moment from 'moment';
import {
	LIVE_OFFERS_SUCCESS,LIVE_OFFERS_FAILURE,
	FETCH_OFFER_DETAIL,FETCH_OFFER_DETAIL_FAILURE,
	EDIT_OFFER,EDIT_OFFER_FAILURE,
} from './../actions/types';

var initialState =  {
  message:"",
  data:null,
  offer_data:null,
  offer_popup:null
};

export default function(state = initialState, action) {
	switch (action.type) {
		case LIVE_OFFERS_SUCCESS:
			return { 
				...state, 
				message:"",
				data: action.payload,
				offer_popup:null
			};
		case LIVE_OFFERS_FAILURE:
			return { 
				...state, 
				livedata: null,
				message: action.payload,
				offer_popup:null
			};
		case FETCH_OFFER_DETAIL:
			//console.log('reducer',action.payload.data);
			return {
			  ...state,
			  offer_data:action.payload.data,
			  errors:null,
			  offer_popup:null
			}
		case FETCH_OFFER_DETAIL_FAILURE:
			return {
			  ...state,
			  offer_data:null,
			  errors:action.payload.error,
			  offer_popup:null
			}
		case EDIT_OFFER:
			return {
				...state,	
				offer_popup:false,
			}
		case EDIT_OFFER_FAILURE:
			return {
				...state,	
				offer_popup:false,
			}			

		default:
			return state;
	}
}
