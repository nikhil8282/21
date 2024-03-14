import { axiosRequest } from '../../services/ApiCall.js';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
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
      const token = Cookies.get('21sqft'); // Get the token from cookies
      // if (!token) {
      //   throw new Error('Authentication token not found');
      // }

      const response = await axiosRequest.get('/user-auth/get', {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the request headers
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


// signin user
// export const signInUser = createAsyncThunk(SIGN_IN_USER, async (body) => {
//   const res = await fetch("http://localhost:8000/api/auth/user-login", {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(body),
//   });
//   return await res.json();
// });

// // change password user or edit user
// export const changePasswordUser = createAsyncThunk(
//   CHANGE_PASSWORD_USER,
//   async (body) => {
//     const res = await fetch(
//       "http://localhost:8000/api/auth/user-change-password",
//       {
//         method: "post",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(body),
//       }
//     );
//     return await res.json();
//   }
// );

// // logged user
// export const loggedUser = createAsyncThunk(LOGGED_USER, async () => {
//   let data = await fetch("http://localhost:8000/api/auth/logged-user");
//   data = await data.json();
//   // Show_data(data);
// });
