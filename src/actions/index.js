import axios from 'axios';
import { FETCH_AGENCIES, FETCH_FAMILIES, LOGIN } from './types';
import { data, agencies } from './mockdata';

export const fetchFamilies = (id) => async (dispatch) => {
	const res = data;
	dispatch({ type: FETCH_FAMILIES, payload: res });
};

export const createFamily = (family, id) => async (dispatch) => {
	console.log('Succeeded, added family: ', family);
	fetchFamilies(id);
};

export const updateFamily = (data, id) => async (dispatch) => {
	console.log('Updated: ', data);
	fetchFamilies(id);
};

export const fetchAgencies = () => (dispatch) => {
	const res = agencies;
	dispatch({ type: FETCH_AGENCIES, payload: res });
};

export const login = (name) => (dispatch) => {
	dispatch({ type: LOGIN, payload: name });
};
