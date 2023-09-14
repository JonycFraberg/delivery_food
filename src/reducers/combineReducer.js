import { combineReducers } from "redux";

import RollReducer from "./rollReducer";
import OrderReducer from "./orderReducer";
export default combineReducers({
  RollReducer,
  OrderReducer,
});
