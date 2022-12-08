import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import { initialize}from'./'
const store = createStore(
  // combineReducers({})
  (state) => state,
  {},
  composeWithDevTools()
);
export default store;
