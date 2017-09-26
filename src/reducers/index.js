import { combineReducers } from 'redux';
import authReducer from './AuthReducer';
import logInReducer from './LogInRedcuder';
import dashboardReducer from './DashboardReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  logIn: logInReducer,
  dashboard: dashboardReducer
});
