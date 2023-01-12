import { combineReducers } from 'redux';
import auth from './auth';
import temple from './temple';

export default combineReducers({
  auth,
  temple
});
