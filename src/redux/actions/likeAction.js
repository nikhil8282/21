import axios from 'axios';
import { LIKE_REQUEST, LIKE_SUCCESS, LIKE_FAILURE } from '../constants/constant'
// export const SET_CONTACT = 'SET_CONTACT';

export const setLike = (id) => {
    return async (dispatch) => {
        dispatch({ type: LIKE_REQUEST });
        try {
            const response = await axios.post('http://localhost:8000/api/auth/like', { id });
            // dispatch({
            // type: SET_LIKE,
            // payload: response.data
            // });
            dispatch({
                type: LIKE_SUCCESS,
                payload: response.data
            });
        } catch (error) {
            dispatch({
                type: LIKE_FAILURE,
                payload: error.message
            });
            // console.error('Error:', error);
        }
    };
};
