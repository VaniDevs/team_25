import axios from 'axios';
import { FETCH_AGENCIES, FETCH_FAMILIES, LOGIN } from './types';
import { data, agencies } from './mockdata';
import { history } from '../routes';

export const fetchFamilies = (id) => async (dispatch) => {
	//const res = data;
	const res = await axios.get('http://localhost:8080/api/clients_list?agency_id=1');
	dispatch({ type: FETCH_FAMILIES, payload: res.data });
};

export const createFamily = (family, id) => async (dispatch) => {
	/**
	 * 
	 * {"name": "Run", 
	 * "date_of_birth": "1996-02-15", 
	 * "baby_date_of_birth": "2018-08-19", 
	 * "phone": 111, 
	 * "email": "runqing.z@gmail.com", 
	 * "details":[],
	 * "state":"approved", 
	 * "agency":1}
	 */
	const options = {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		data: JSON.stringify(family),
		url: 'http://localhost:8080/api/clients_list?agency_id=1'
	};
	axios(options).then((res) => {
		console.log('Succeeded, added family: ', res);
		fetchFamilies(id);
	}).catch(e=>{
		console.log(e);
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
