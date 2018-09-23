import axios from "axios";
import { FETCH_AGENCIES, FETCH_FAMILIES, LOGIN } from "./types";
import { data, agencies } from "./mockdata";
import { history } from "../routes";

export const fetchFamilies = id => async dispatch => {
  //const res = data;
  const res = await axios.get(
    "http://localhost:8080/api/clients_list?agency_id=1"
  );
  dispatch({ type: FETCH_FAMILIES, payload: res.data });
};

export const createFamily = (family, id) => async dispatch => {
  const options = {
    method: "POST",
    headers: { "content-type": "application/json" },
    data: JSON.stringify(family),
    url: "http://localhost:8080/api/clients_list?agency_id=1"
  };
  axios(options)
    .then(res => {
      console.log("Succeeded, added family: ", res);
      axios
        .get("http://localhost:8080/api/clients_list?agency_id=1")
        .then(response => {
          dispatch({ type: FETCH_FAMILIES, payload: response.data });
        });
    })
    .catch(e => {
      console.log(e);
    });
};

export const updateFamily = (data, id) => async dispatch => {
	const options = {
    method: "PATCH",
    headers: { "content-type": "application/json" },
    data: JSON.stringify(data),
    url: "http://localhost:8080/api/clients/"+data.id+"/"
  };
  axios(options)
    .then(res => {
      console.log("Succeeded, update family: ", res);
      axios
        .get("http://localhost:8080/api/clients_list?agency_id=1")
        .then(response => {
          dispatch({ type: FETCH_FAMILIES, payload: response.data });
        });
    })
    .catch(e => {
      console.log(e);
    });
};

export const fetchAgencies = () => dispatch => {
  const res = agencies;
  dispatch({ type: FETCH_AGENCIES, payload: res });
};


export const login = name => dispatch => {
  history.push("/agency");
  dispatch({ type: LOGIN, payload: name });
};
