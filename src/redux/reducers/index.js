import { combineReducers } from "redux";
import auth from "./auth";
import task from "./tasks";

const rootReducer = combineReducers({ auth, task });

export default rootReducer;
