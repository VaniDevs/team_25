import { FETCH_FAMILIES } from '../actions/types';

export default (state = null, action) => {
	//console.log(action.payload);
	switch (action.type) {
		case FETCH_FAMILIES:
			return action.payload || false;
		default:
			return state;
	}
};
