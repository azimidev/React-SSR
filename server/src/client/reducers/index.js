import { combineReducers } from 'redux';
import usersReducers from './usersReducers';
import authReducer from './authReducer';
import adminsReducers from './adminsReducers';

export default combineReducers({
	auth: authReducer,
	users: usersReducers,
	admins: adminsReducers,
});
