import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import Sellerregister from './register_seller';
import Login from './login_reducer';
import SellMyCar from './sellmycar';
import Cms from './cms_reducer';
import SearchCar from './searchcar_reducer';
import Cardetail from './cardetail_reducer';
import Dealerregister from './register_dealer';
import Offers from './offer';
import Preferences from './editpreferences';

export default combineReducers({
  form,
  Sellerregister,
  Login,
  SellMyCar,
  Cms,
  SearchCar,
  Cardetail,
  Dealerregister,
  Offers,
  Preferences,
});