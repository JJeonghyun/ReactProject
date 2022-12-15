import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { initialize as userDBIni, reducer as userDBRedcuer } from "./userDB";
import {
  initialize as userInfoIni,
  reducer as userInfoRedcuer,
} from "./userInfo";

const store = createStore(
  combineReducers({ userDB: userDBRedcuer, userInfo: userInfoRedcuer }),
  { userDB: userDBIni, userInfo: userInfoIni },
  composeWithDevTools()
);

export default store;
