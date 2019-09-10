import axios from 'axios';
import thunk from 'redux-thunk';
import reducers from '../client/reducers';
import { createStore, applyMiddleware } from 'redux';

export default (req) => {
	const api = axios.create({
		baseURL: 'http://react-ssr-api.herokuapp.com',
		headers: { cookie: req.get('cookie') || '' }
	});

	const store = createStore(
		reducers,
		{},
		applyMiddleware(thunk.withExtraArgument(api))
	);

	return store;
};
