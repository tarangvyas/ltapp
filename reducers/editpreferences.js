import moment from 'moment';
import {
	PREFERENCE_MODEL_LIST,PREFERENCE_MODEL_LIST_FAILURE,
	VIEW_PREFERENCE,VIEW_PREFERENCE_FAILURE
} from './../actions/types';

var initialState =  {
  message:"",
  data:null,
  model_data:null
};

export default function(state = initialState, action) {
	switch (action.type) {
		case PREFERENCE_MODEL_LIST:
			return { 
				...state, 
				message:"",
				model_data: action.payload
			};
		case PREFERENCE_MODEL_LIST_FAILURE:
			return { 
				...state, 
				model_data: null,
				message: action.payload
			};
		case VIEW_PREFERENCE:
			return { 
				...state, 
				message:"",
				data: action.payload
			};
		case VIEW_PREFERENCE_FAILURE:
			return { 
				...state, 
				data: null,
				message: action.payload
			};	
		default:
			return state;
	}
}
