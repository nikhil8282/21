import { combineReducers } from "redux";
import { contactReducer } from "./contactReducer";
import { getintouchReducer } from "./getintouchReducer";
import { fetchReducer } from "./fetchcardReducer";
import { likeReducer } from "./likeReducer";
import searchReducer from "./searchReducer";
import userReducer from "./userReducer";
import supplierAuthReducer from "./supplierAuthReducer";
import contractorReducer from "./contractorReducer";

const rootReducer = combineReducers({
  contactReducer,
  getintouchReducer,
  fetchReducer,
  likeReducer,
  searchReducer,
  userReducer,
  supplierAuthReducer,
  contractorReducer,
});

export default rootReducer;
