import moment from 'moment';
import {
	REGISTER_DEALER_SUCCESS,
	REGISTER_DEALER_FAILURE,
} from './../actions/types';

var initialState =  {
  message:"",
  data:null
};

export default function(state = initialState, action) {
	switch (action.type) {
		case REGISTER_DEALER_SUCCESS:
			return { 
				...state, 
				message:"",
				data: action.payload
			};
		case REGISTER_DEALER_FAILURE:
			return { 
				...state, 
				data: null,
				message: action.payload
			};
		default:
			return state;
	}
}
