import { combineReducers } from "redux";
import { contactReducer } from "./contactReducer";
import { getInTouchReducer } from "./getintouchReducer";
import { fetchReducer } from "./fetchcardReducer";
import { likeReducer } from "./likeReducer";
import searchReducer from "./searchReducer";
import userReducer from "./userReducer";
import supplierAuthReducer from "./supplierAuthReducer";
import contractorReducer from "./contractorReducer";

const rootReducer = combineReducers({
  contactReducer,
  getInTouchReducer,
  fetchReducer,
  likeReducer,
  searchReducer,
  userReducer,
  supplierAuthReducer,
  contractorReducer,
});

export default rootReducer;
