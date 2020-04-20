/** ********** IMPORT LIBRARIES ********** */
import axios from 'axios';
import site from '../constants/constants';

import { 
    FETCHING_DATA_MAIN_REQUEST, 
    FETCHING_DATA_MAIN_SUCCESS, 
    FETCHING_DATA_MAIN_FAILURE 
} from '../constants/constants';

/** ********** FUNCTION FOR FETCH REQUEST ********** */
export const fetchingDataMainRequest = () => ({ type: FETCHING_DATA_MAIN_REQUEST });

/** ********** FUNCTION FOR FETCH SUCCESS ********** */
export const fetchingDataMainSuccess = data => ({
    type: FETCHING_DATA_MAIN_SUCCESS,
    payload: data.data
});

/** ********** FUNCTION FOR FETCH_FAILURE ********** */
export const fetchingDataMainFailure = error => ({
    type: FETCHING_DATA_MAIN_FAILURE,
    payload: error
});

export const fetchDataMain = () => {
    return async dispatch => {
        dispatch(fetchingDataMainRequest());
        try {
            await axios.get(`${site}/main`)
                       .then(data => {
                           dispatch(fetchingDataMainSuccess(data));
                       })
                       .catch(error => { console.log(error) })
        } catch (error) {
            dispatch(fetchingDataMainFailure(error));
        }
    }
};