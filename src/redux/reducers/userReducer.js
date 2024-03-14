import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  USER_EDIT_FAILURE,
  USER_EDIT_REQUEST,
  USER_EDIT_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_FAIL,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS
} from "../constants/userAuthConstant";

const initialState = {
  loading: false,
  error: null,
  success: false,
  user: null,
  // isUserAuthenticated: false
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
    case USER_LOGIN_REQUEST:
    case GET_USER_REQUEST:
    case USER_LOGOUT_REQUEST:
    case USER_EDIT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        success: false,
        isUserAuthenticated: false
      };

    case USER_REGISTER_SUCCESS:
    case USER_LOGIN_SUCCESS:
    case GET_USER_SUCCESS:
    case USER_EDIT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        user: action.payload,
        error: null,
        isUserAuthenticated: true
      };

    case USER_REGISTER_FAILURE:
    case USER_LOGIN_FAILURE:
    case GET_USER_FAILURE:
    case USER_LOGOUT_FAIL:
    case USER_EDIT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        user: null,
        success: false,
        isUserAuthenticated: false
      };

    case USER_LOGOUT_SUCCESS:
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

export default userReducer;