import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { initialize as userDBIni } from "./userDB";
import { reducer as userDB } from "./userDB";

const store = createStore(
  combineReducers({ userDB }),
  { userDB: userDBIni },
  composeWithDevTools()
);

export default store;
