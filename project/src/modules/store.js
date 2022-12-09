import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { initialize as userDBIni } from "./userDB";
import { initialize as userInfoIni } from "./userInfo";
import { reducer as userDB } from "./userDB";
import { reducer as userInfo } from "./userInfo";

const store = createStore(
  combineReducers({ userDB, userInfo }),
  { userInfo: userInfoIni, ...userDBIni },
  composeWithDevTools()
);

export default store;
