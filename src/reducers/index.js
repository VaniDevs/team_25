import { combineReducers } from 'redux';
import reducer_family from './reducer_families';

const root_reducer = combineReducers({
	families: reducer_family
});

export default root_reducer;
