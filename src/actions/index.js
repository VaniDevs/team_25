import axios from 'axios';
import { FETCH_AGENCIES, FETCH_FAMILIES } from './types';
import data from './mockdata';

export const fetchFamilies = (id) => async (dispatch) => {
	const res = data;
	dispatch({ type: FETCH_FAMILIES, payload: res });
};
