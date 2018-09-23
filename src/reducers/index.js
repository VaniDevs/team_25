import { combineReducers } from "redux";
import reducer_family from "./reducer_families";
import reducer_agencies from "./reducer_agencies";
import reducer_id from "./reducer_id";
import "bootstrap/dist/css/bootstrap.min.css";

const root_reducer = combineReducers({
  families: reducer_family,
  agencies: reducer_agencies,
  id: reducer_id
});

export default root_reducer;
