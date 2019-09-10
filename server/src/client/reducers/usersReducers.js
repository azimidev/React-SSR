import { FETCH_USERS } from '../actions';

export default (state = [], action) => {
	switch (action.type) {
		case FETCH_USERS:
			return action.payload.date;
		default:
			return state;
	}
};
