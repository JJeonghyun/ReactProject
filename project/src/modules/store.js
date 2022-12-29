import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { initialize as cartDBIni, reducer as cartDBReducer } from "./cartDB";
import { initialize as userDBIni, reducer as userDBRedcuer } from "./userDB";
import {
  initialize as userInfoIni,
  reducer as userInfoRedcuer,
} from "./userInfo";

const store = createStore(
  combineReducers({
    userDB: userDBRedcuer,
    userInfo: userInfoRedcuer,
    cartDB: cartDBReducer,
  }),
  { userDB: userDBIni, userInfo: userInfoIni, cartDB: cartDBIni },
  composeWithDevTools()
);

export default store;
