import { combineReducers } from "redux";
import SetPriceReducer from "./modules/SetPrice";

export default combineReducers({
  SetPrice: SetPriceReducer
});
