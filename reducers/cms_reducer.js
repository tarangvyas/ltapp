import axios from 'axios'
import {VIEW_CMS_DETAIL,VIEW_CMS_DETAIL_FAILURE} from './../actions/types';


var initialState =  {
  errors:null,
  page_data:null,
};

export default function(state = initialState, action) {
  switch (action.type) {

      case VIEW_CMS_DETAIL:
      return {
        ...state,
        page_data:action.payload.data.data,
        errors:null
      }
      case VIEW_CMS_DETAIL_FAILURE:
      return {
        ...state,
        page_data:null,
        errors:action.payload.error
      }
    default:
			return {...state};
  }
}