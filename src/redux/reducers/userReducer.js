import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
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
      return {
        ...state,
        loading: true,
        error: null,
        success: false,
        isUserAuthenticated: false
      };

    case USER_REGISTER_SUCCESS:
    case USER_LOGIN_SUCCESS:
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
      return {
        ...state,
        loading: false,
        error: action.error,
        user: null,
        success: false,
        isUserAuthenticated: false
      };


    default:
      return state;
  }
};

export default userReducer;