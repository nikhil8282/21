import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE } from '../constants/constant';
import axiosRequest from '../../services/ApiCall';

export const fetchSearchResults = () => {
    return async (dispatch) => {
        dispatch({ type: SEARCH_REQUEST });
        console.log()
        // console.log(id)
        try {
            const response = await axiosRequest.get(`/contractor/search`, {})
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
