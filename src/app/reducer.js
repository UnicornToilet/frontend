import {combineReducers} from 'redux';

import authReducer from '../components/auth/reducer';
import toiletReducer from '../components/google-map/reducer';


export default combineReducers({
  toilets: toiletReducer,
  auth: authReducer,
});
