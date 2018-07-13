import { combineReducers } from "redux";
import SetPriceReducer from "./modules/SetPrice";
import PriceChangeReducer from "./modules/PriceChange";

export default combineReducers({
  SetPrice: SetPriceReducer,
  PriceChange: PriceChangeReducer
});
