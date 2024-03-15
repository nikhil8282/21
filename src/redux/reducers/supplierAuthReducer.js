import {
  GET_SUPPLIER_FAILURE,
  GET_SUPPLIER_REQUEST,
  GET_SUPPLIER_SUCCESS,
  SUPPLIER_EDIT_FAILURE,
  SUPPLIER_EDIT_REQUEST,
  SUPPLIER_EDIT_SUCCESS,
  SUPPLIER_LOGIN_FAILURE,
  SUPPLIER_LOGIN_REQUEST,
  SUPPLIER_LOGIN_SUCCESS,
  SUPPLIER_LOGOUT_FAIL,
  SUPPLIER_LOGOUT_REQUEST,
  SUPPLIER_LOGOUT_SUCCESS,
  SUPPLIER_REGISTER_FAILURE,
  SUPPLIER_REGISTER_REQUEST,
  SUPPLIER_REGISTER_SUCCESS
} from "../constants/supplierAuthConstant";

const initialState = {
  loading: false,
  error: null,
  success: false,
  supplier: null,
  // isSupplierAuthenticated: false
};

export const supplierAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUPPLIER_REGISTER_REQUEST:
    case SUPPLIER_LOGIN_REQUEST:
    case GET_SUPPLIER_REQUEST:
    case SUPPLIER_EDIT_REQUEST:
    case SUPPLIER_LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        success: false,
        isSupplierAuthenticated: false
      };

    case SUPPLIER_REGISTER_SUCCESS:
    case SUPPLIER_LOGIN_SUCCESS:
    case GET_SUPPLIER_SUCCESS:
    case SUPPLIER_EDIT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        supplier: action.payload,
        error: null,
        isSupplierAuthenticated: true
      };

    case SUPPLIER_REGISTER_FAILURE:
    case SUPPLIER_LOGIN_FAILURE:
    case GET_SUPPLIER_FAILURE:
    case SUPPLIER_EDIT_FAILURE:
    case SUPPLIER_LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        supplier: null,
        success: false,
        isSupplierAuthenticated: false
      };

    case SUPPLIER_LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        error: null,
        loading: false,
        isUserAuthenticated: false
      };

    default:
      return state;
  }
};

export default supplierAuthReducer;