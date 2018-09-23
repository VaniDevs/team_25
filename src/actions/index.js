import axios from 'axios';
import { FETCH_AGENCIES, FETCH_FAMILIES, LOGIN } from './types';
import { data, agencies } from './mockdata';
import { history } from '../routes';

export const fetchFamilies = (id) => async (dispatch) => {
	//const res = data;
	const res = axios.get('http://localhost:8080/api/clients_list?agency_id=1');
	dispatch({ type: FETCH_FAMILIES, payload: res.body });
};

export const createFamily = (family, id) => async (dispatch) => {
	axios.post('http://localhost:8080/api/clients_list?agency_id=1', family).then((res) => {
		console.log('Succeeded, added family: ', res);
		fetchFamilies(id);
	});
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
	history.push('/agency');
	dispatch({ type: LOGIN, payload: name });
};
