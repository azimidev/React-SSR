import { combineReducers } from 'redux';
import usersReducers from './usersReducers';

export default combineReducers({
	users: usersReducers
});
