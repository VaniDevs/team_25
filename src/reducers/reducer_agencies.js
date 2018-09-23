import { FETCH_AGENCIES } from '../actions/types';

export default (state = null, action) => {
	console.log(action.payload);
	switch (action.type) {
		case FETCH_AGENCIES:
			return action.payload || false;
		default:
			return state;
	}
};
