import { axiosRequest } from '../../services/ApiCall.js';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import {
  SUPPLIER_LOGIN_REQUEST,
  SUPPLIER_LOGIN_SUCCESS,
  SUPPLIER_LOGIN_FAILURE,
  SUPPLIER_REGISTER_FAILURE,
  SUPPLIER_REGISTER_REQUEST,
  SUPPLIER_REGISTER_SUCCESS,
  GET_SUPPLIER_REQUEST,
  GET_SUPPLIER_SUCCESS,
  GET_SUPPLIER_FAILURE,
  SUPPLIER_LOGOUT_SUCCESS,
  SUPPLIER_LOGOUT_FAIL,
  SUPPLIER_EDIT_REQUEST,
  SUPPLIER_EDIT_SUCCESS,
  SUPPLIER_EDIT_FAILURE,
} from "../constants/supplierAuthConstant.js";

// Supplier Registration
export const supplierRegister = (supplierRegisterData, navigate) => {
  return async (dispatch) => {
    dispatch({ type: SUPPLIER_REGISTER_REQUEST });
    try {
      const response = await axiosRequest.post('/contractor/register', supplierRegisterData);
      dispatch({
        type: SUPPLIER_REGISTER_SUCCESS,
        payload: response.data
      });

      // Set the token in cookies
      const { token } = response.data;
      Cookies.set('21sqft', token, { expires: 7 });
      navigate('/');
      return response.data
    } catch (error) {
      dispatch({
        type: SUPPLIER_REGISTER_FAILURE,
        payload: error.message
      });
      console.log(error);
      // console.error(`${error?.response?.data?.error || 'Something Went Wrong'}`);
      toast.error(`${error?.response?.data?.message || 'Something Went Wrong'}`);
      throw error;
    }
  };
};


// Supplier Login
export const supplierLogin = (supplierLoginData, navigate) => {
  return async (dispatch) => {
    dispatch({ type: SUPPLIER_LOGIN_REQUEST });
    try {
      const response = await axiosRequest.post('/contractor/login', supplierLoginData);
      dispatch({
        type: SUPPLIER_LOGIN_SUCCESS,
        payload: response.data
      });

      // Set the token in cookies
      const { token } = response.data;
      Cookies.set('21sqft', token, { expires: 7 });
      navigate('/');
      return response.data
    } catch (error) {
      dispatch({
        type: SUPPLIER_LOGIN_FAILURE,
        payload: error.message
      });
      // console.log(error);
      // console.error(`${error?.response?.data?.message || 'Something Went Wrong'}`);
      toast.error(`${error?.response?.data?.message || 'Something Went Wrong'}`);
      throw error;
    }
  };
};

// get Supplier
export const getSupplier = () => {
  return async (dispatch) => {
    dispatch({ type: GET_SUPPLIER_REQUEST });
    try {
      const token = Cookies.get('21sqft'); // Get the token from cookies
      // if (!token) {
      //   throw new Error('Authentication token not found');
      // }

      const response = await axiosRequest.get('/contractor/profile', {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        },
      });

      dispatch({
        type: GET_SUPPLIER_SUCCESS,
        payload: response.data
      });

      return response.data;
    } catch (error) {
      dispatch({
        type: GET_SUPPLIER_FAILURE,
        payload: error.message
      });
      console.log(error);
      // console.error(`${error?.response?.data?.message || 'Something Went Wrong'}`);
      // toast.error(`${error?.response?.data?.message || 'Something Went Wrong'}`);
      // throw error;
    }
  };
};

// logout supplier
export const supplierLogout = (navigate) => async (dispatch) => {
  try {
    const token = Cookies.get('21sqft');

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const data = await axiosRequest.get(
      `/contractor/logout`,
      config
    );

    if (data.success) {
      Cookies.remove('21sqft');
      dispatch({ type: SUPPLIER_LOGOUT_SUCCESS });
    }
    navigate('/');

  } catch (error) {
    dispatch({
      type: SUPPLIER_LOGOUT_FAIL,
      payload: error.response.data.message,
      response: error.response,
    });
    throw error;
  }
};

// supplier edit profile
export const supplierEditProfile = (supplierEditProfileData) => async (dispatch) => {
  try {
    dispatch({ type: SUPPLIER_EDIT_REQUEST });
    const token = Cookies.get('21sqft');

    const config = {
      headers: {
        "Content-Type": "multipart/form-data", // Change content type for FormData
        Authorization: `Bearer ${token}`,
      }
    };

    // Send PUT request to edit user profile
    const { data } = await axiosRequest.put(
      `/contractor/edit`,
      supplierEditProfileData,
      config,
    );

    dispatch({
      type: SUPPLIER_EDIT_SUCCESS,
      payload: data.user,
    });
    toast.success("Profile Updated Successfully");
    // Handle navigation if needed

    return data

  } catch (error) {
    dispatch({
      type: SUPPLIER_EDIT_FAILURE,
      payload: error.response?.data?.message || 'An error occurred',
    });
    toast.error(error.response?.data?.message || 'An error occurred');
  }
};



// export const edit =
//   (name, phone, service, address, city, state, desc, shortDesc, image) =>
//     async (dispatch) => {
//       try {
//         dispatch(editRequest());
//         const response = await axios.put(
//           "http://localhost:8000/api/auth/contractor-edit",
//           { name, phone, service, address, city, state, desc, shortDesc, image },
//           {
//             headers: {
//               'Content-Type': 'application/json',
//               // Authorization: `Bearer ${token}`, 
//             },
//           }

//           // ,{

//           //     headers: {
//           //         'Content-Type': 'application/json',
//           //       },

//           //       // body: JSON.stringify(data),

//           // }
//         );


//         const token = response.data.token;

//         // const saveTokenToCookie=(token)=>{
//         //   Cookies.set('token',token)
//         // }

//         // useEffect(()=>{
//         //   if(token){
//         //     saveTokenToCookie(token)
//         //   }

//         // },[])

//         console.log(token);





//         // console.log(response);

//         if (!response.ok) {
//           throw new Error("Failed to edit supplier");
//         }
//         dispatch({ type: EDIT_SUCCESS, payload: response.data });
//       } catch (error) {
//         dispatch({ type: EDIT_FAILURE, payload: error.message });
//       }
//     };

// // editFailure(error.message)

// export const logout = (data) => async (dispatch) => {
//   try {
//     const response = await axios.get(
//       "http://localhost:8000/api/auth/contractor-logout",
//       { data },
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     dispatch({
//       type: LOGOUT,
//       // payload: response.data,
//     });
//   } catch (error) {
//     // Handle error here
//     dispatch({ type: LOGOUT_FAIL, payload: error.response.message });
//   }
// };

// // import * as constant from  "../Constant/constant";
// // import {CONTRACTOR_OR_SUPPLIRE_LOGIN} from  "../Constant/constant";

// // export const getSupplierL=(data)=>{
// //   return{
// //     type:CONTRACTOR_OR_SUPPLIRE_LOGIN,
// //     payload:data
// //   }
// // }

// // export const login = (username, password) => {
// //   return async (dispatch) => {
// //     dispatch({ type: constant.LOGIN_REQUEST });
// //     try {

// //       const user = await fakeApiLogin(username, password);
// //       dispatch({ type: constant.LOGIN_SUCCESS, payload: { user } });
// //     } catch (error) {
// //       dispatch({ type: constant.LOGIN_FAILURE, payload: { error } });
// //     }
// //   };
// // };

// // export const logout = () => {
// //   return { type: constant.LOGOUT };
// // };

// // const fakeApiLogin = async (username, password) => {

// //   await new Promise(resolve => setTimeout(resolve, 1000));

// //   return { username };
// // };
