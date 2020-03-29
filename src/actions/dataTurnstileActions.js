/** ********** IMPORT LIBRARIES ********** */
import axios from 'axios';
import site from '../constants/constants';

import { 
    FETCHING_DATA_TURNSTILE_REQUEST, 
    FETCHING_DATA_TURNSTILE_SUCCESS, 
    FETCHING_DATA_TURNSTILE_FAILURE,
    TOGGLE_MODAL_TURNSTILE,
    TOGGLE_MODAL_TURNSTILE_MAIN_INFO
} from '../constants/constants';

/** ********** ACTION FOR FETCH REQUEST ********** */
export const fetchingDataTurnstileRequest = () => ({ type: FETCHING_DATA_TURNSTILE_REQUEST });

/** ********** ACTION FOR FETCH SUCCESS ********** */
export const fetchingDataTurnstileSuccess = data => ({
    type: FETCHING_DATA_TURNSTILE_SUCCESS,
    payload: data.data
})

/** ********** ACTION FOR FETCH_FAILURE ********** */
export const fetchingDataTurnstileFailure = error => ({
    type: FETCHING_DATA_TURNSTILE_FAILURE,
    payload: error
})

export const fetchDataTurnstile = () => {
    return async dispatch => {
        dispatch(fetchingDataTurnstileRequest());
        try {
            await axios.post(`${site}/turnstile`, {
                app_id: 'APP_ID',
                trigger: 1,
                trigger_state: 1,
                button_seria_state: 0,
                button_corpse_state: 0,
                module_selectors: [
                    {
                      module: 0,
                      state: 1
                    },
                    {
                      module: 1,
                      state: 0
                    },
                    {
                      module: 2,
                      state: 0
                    },
                    {
                      module: 3,
                      state: 0
                    },
                    {
                      module: 4,
                      state: 0
                    },
                    {
                      module: 5,
                      state: 0
                    },
                    {
                      module: 6,
                      state: 0
                    },
                    {
                      module: 7,
                      state: 0
                    }
                ]        
            })
            .then(data => {
                dispatch(fetchingDataTurnstileSuccess(data));
            })
            .catch(error => { console.log(error) })
        } catch (error) {
            dispatch(fetchingDataTurnstileFailure(error));
        }
    }
}

/** ********** ACTIONS FOR TOGGLE POPUP WINDOW ********** */
export const togglePopupWindowTurnstile = () => ({ type: TOGGLE_MODAL_TURNSTILE })

/** ********** ACTIONS FOR TOGGLE POPUP WINDOW MAIN INFO ********** */
export const togglePopupWindowMainInfoTurnstile = () => ({ type: TOGGLE_MODAL_TURNSTILE_MAIN_INFO })

// import { ADD_USER } from './types';
// import axios from 'axios';

// export const userLoginRequest = () => dispatch => {
//     axios.post(`localhost:5000/api/users`)
//     .then( userdata => 
//         dispatch({
//             type: ADD_USER,
//             payload: userdata
//         })
//     )
//     .catch( error => {
//         console.log(error);
//     });
// };