import { combineReducers } from 'redux';
import authReducer from './AuthReducer';
import logInReducer from './LogInRedcuder';

export const rootReducer = combineReducers({
  auth: authReducer,
  logIn: logInReducer,
});

