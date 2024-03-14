import { axiosRequest } from '../../services/ApiCall.js';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
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
  USER_LOGOUT_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants/userAuthConstant.js";

export const userRegister = (userRegisterData, navigate) => {
  return async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST });
    try {
      const response = await axiosRequest.post('/user-auth/register', userRegisterData);
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: response.data
      });

      // Set the token in cookies
      const { token } = response.data;
      Cookies.set('21sqft', token, { expires: 7 });
      navigate('/');
      return response.data
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAILURE,
        payload: error.message
      });
      console.log(error);
      // console.error(`${error?.response?.data?.error || 'Something Went Wrong'}`);
      toast.error(`${error?.response?.data?.message || 'Something Went Wrong'}`);
      throw error;
    }
  };
};

// user login
export const userLogin = (userLoginData, navigate) => {
  return async (dispatch) => {
    dispatch({ type: USER_LOGIN_REQUEST });
    try {
      const response = await axiosRequest.post('/user-auth/login', userLoginData);
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: response.data
      });

      // Set the token in cookies
      const { token } = response.data;
      Cookies.set('21sqft', token, { expires: 7 });
      navigate('/');
      return response.data
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAILURE,
        payload: error.message
      });
      console.log(error);
      // console.error(`${error?.response?.data?.error || 'Something Went Wrong'}`);
      toast.error(`${error?.response?.data?.message || 'Something Went Wrong'}`);
      throw error;
    }
  };
};

// get user
export const getUser = () => {
  return async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST });
    try {
      const token = Cookies.get('21sqft');

      const response = await axiosRequest.get('/user-auth/get', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch({
        type: GET_USER_SUCCESS,
        payload: response.data
      });

      return response.data;
    } catch (error) {
      dispatch({
        type: GET_USER_FAILURE,
        payload: error.message
      });
      // console.log(error);
      // toast.error(`${error?.response?.data?.message || 'Something Went Wrong'}`);
      // throw error;
    }
  };
};

// logout user
export const userLogout = () => async (dispatch) => {
  try {
    const token = Cookies.get('21sqft');
    console.log('Token from cookies:', token);

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const data = await axiosRequest.get(
      `/user-auth/logout`,
      config
    );

    if (data.success) {
      Cookies.remove('21sqft');
      dispatch({ type: USER_LOGOUT_SUCCESS });
    }

  } catch (error) {
    dispatch({
      type: USER_LOGOUT_FAIL,
      payload: error.response.data.message,
      response: error.response,
    });
    throw error;
  }
};

// user edit profile
export const userEditProfile = (userEditProfileData) => async (dispatch) => {
  try {
    dispatch({ type: USER_EDIT_REQUEST });
    const token = Cookies.get('21sqft');

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    };

    // Send PUT request to edit user profile
    const { data } = await axiosRequest.put(
      `/user-auth/edit`,
      userEditProfileData,
      config,
    );

    // Handle response
    if (data.success) {
      dispatch({
        type: USER_EDIT_SUCCESS,
        payload: data.user,
      });
      toast.success("Profile Updated Successfully");
      // Handle navigation if needed
    } else {
      dispatch({
        type: USER_EDIT_FAILURE,
        payload: data.message || 'Edit profile failed. Please check your credentials.',
      });
      toast.error(data.message || 'Edit profile failed. Please check your credentials.');
    }
    return data

  } catch (error) {
    console.error(error.response?.data);
    dispatch({
      type: USER_EDIT_FAILURE,
      payload: error.response?.data?.message || 'An error occurred',
    });
    toast.error(error.response?.data?.message || 'An error occurred');
  }
};
