import {combineReducers} from 'redux';
import authReducer from './authReducer';
import homeReducer from './homeReducer';

const reducers = {
  auth: authReducer,
  home: homeReducer,
};

export default combineReducers(reducers);
