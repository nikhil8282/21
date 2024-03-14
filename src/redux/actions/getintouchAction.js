import axios from 'axios';
import { GET_IN_TOUCH_REQUEST, GET_IN_TOUCH_SUCCESS, GET_IN_TOUCH_FAILURE } from '../constants/constant'

// export const SET_GET_IN_TOUCH = 'SET_GET_IN_TOUCH';

export const setGetInTouch = (name, email, phone, msg) => {
    return async (dispatch) => {
        dispatch({ type: GET_IN_TOUCH_REQUEST });
        try {
            const response = axios.post('http://localhost:8000/api/auth/get-in-touch-with-us', { name, email, phone, msg })
            // dispatch({
            // type: SET_GET_IN_TOUCH,
            // payload: response.data
            // });
            dispatch({
                type: GET_IN_TOUCH_SUCCESS,
                payload: response.data
            });
        } catch (error) {
            dispatch({
                type: GET_IN_TOUCH_FAILURE,
                payload: error.message
            });
            // console.error('Error:', error);
        }
    };
};
