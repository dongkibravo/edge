import { combineReducers } from 'redux';
import authReducer from './AuthReducer';
import logInReducer from './LogInRedcuder';
import dashboardReducer from './DashboardReducer';
import proReducer from './ProReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  logIn: logInReducer,
  dashboard: dashboardReducer,
  pro: proReducer
});
