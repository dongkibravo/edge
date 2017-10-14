import { combineReducers } from 'redux';
import authReducer from './AuthReducer';
import logInReducer from './LogInRedcuder';
import dashboardReducer from './DashboardReducer';
import proReducer from './ProReducer';
import supportReducer from './SupportReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  logIn: logInReducer,
  dashboard: dashboardReducer,
  pro: proReducer,
  support: supportReducer
});


export default (state,action) => {
	if (action.type === 'LOGOUT') {
		state = {};
	}

	return rootReducer(state,action);
};
