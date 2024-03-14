import axios from 'axios';
import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE } from '../constants/constant';

export const fetchSearchResults = () => {
    return async (dispatch) => {
        dispatch({ type: SEARCH_REQUEST });
        console.log()
        // console.log(id)
        try {
            const response = await axios.get(`http://localhost:8000/api/auth/search`, {})
            // .then((response) => response.json())
            // .then((json) => {
            // console.log(json);
            // });
            // console.log(response)
            // dispatch(setSearchResults(response.data.data));
            dispatch({
                type: SEARCH_SUCCESS,
                payload: response.data

            })
            // console.log(response.data)
        } catch (error) {
            dispatch({
                type: SEARCH_FAILURE,
                error: error.message
            })
        }
    };
};
