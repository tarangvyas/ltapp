import moment from 'moment';
import {
	REGISTER_SELLER_SUCCESS,
  	REGISTER_SELLER_FAILURE,
} from './../actions/types';

var initialState =  {
  message:"",
  data:null
};

export default function(state = initialState, action) {
	switch (action.type) {
		case REGISTER_SELLER_SUCCESS:
			return { 
				...state, 
				message:"",
				data: action.payload
			};
		case REGISTER_SELLER_FAILURE:
			return { 
				...state, 
				data: null,
				message: action.payload
			};
		default:
			return state;
	}
}
