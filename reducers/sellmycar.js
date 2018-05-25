import moment from 'moment';
import {
	LASTPOSTEDCAR_SUCCESS,
  	LASTPOSTEDCAR_FAILURE,
	SPECIFICATION_SUCCESS,
    SPECIFICATION_FAILURE,
	ADD_SPECIFICATION_SUCCESS,
	ADD_SPECIFICATION_FAILURE,
	ADD_CARIMAGE_SUCCESS,
    ADD_CARIMAGE_FAILURE,
	SELLMYCAR_SUCCESS,
    SELLMYCAR_FAILURE,
} from './../actions/types';

var initialState =  {
  message:"",
  lastposted_car:null,
  specification_list:null,
  specification_added:false,
  carimage_added:false,
  sellcar:''
};

export default function(state = initialState, action) {
	switch (action.type) {
		case LASTPOSTEDCAR_SUCCESS:
			return { 
				...state, 
				message:"",
				lastposted_car: action.payload,
				specification_added:false,
				carimage_added: false,
				sellcar:''

			};
		case LASTPOSTEDCAR_FAILURE:
			return { 
				...state, 
				lastposted_car: null,
				message: action.payload,
				carimage_added: false,
				specification_added:false,
				sellcar:''
			};
		case SPECIFICATION_SUCCESS:
			return { 
				...state, 
				message:"",
				specification_list: action.payload,
				carimage_added: false,
				specification_added:false,
				sellcar:''
				
			};
		case SPECIFICATION_FAILURE:
			return { 
				...state, 
				specification_list: null,
				message: action.payload,
				carimage_added: false,
				specification_added:false,
				sellcar:''
			};
		case ADD_SPECIFICATION_SUCCESS:
			return { 
				...state, 
				message: "",
				carimage_added: false,
				specification_added: true,
				sellcar:''
			};
		case ADD_SPECIFICATION_FAILURE:
			return { 
				...state, 
				specification_added: false,
				carimage_added: false,
				message: action.payload,
				sellcar:''
			};
		case ADD_CARIMAGE_SUCCESS:
			return { 
				...state, 
				message: "",
				carimage_added: true,
				sellcar:''
			};
		case ADD_CARIMAGE_FAILURE:
			return { 
				...state, 
				carimage_added: false,
				message: action.payload,				
				sellcar:''
			};
		case SELLMYCAR_SUCCESS:
			return { 
				...state, 
				message: "",
				sellcar: action.payload
			};
		case SELLMYCAR_FAILURE:
			return { 
				...state, 
				sellcar: '',
				message: action.payload
			};				
		default:
			return state;
	}
}
