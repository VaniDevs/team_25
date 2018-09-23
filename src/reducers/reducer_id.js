import { LOGIN } from '../actions/types';

export default (state = null, action) => {
	//console.log(action.payload);
	switch (action.type) {
		case LOGIN:
			return action.payload || false;
		default:
			return state;
	}
};
