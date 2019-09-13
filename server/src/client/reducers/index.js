import { combineReducers } from 'redux';
import usersReducers from './usersReducers';
import authReducer from './authReducer';

export default combineReducers({
	users: usersReducers,
	auth: authReducer,
});
