// ********** IMPORT VARIABLES FROM TYPES ********** //
import { 
    FETCHING_DATA_TURNSTILE_REQUEST, 
    FETCHING_DATA_TURNSTILE_SUCCESS, 
    FETCHING_DATA_TURNSTILE_FAILURE 
} from '../constants/constants';

const initialState = {
    isFetching: false,
    errorMessage: '',
    data: []
}

// ********** REDUCER FOR DATA MAIN REQUEST ********** //
export default function(state = initialState, action) {
    switch(action.type) {
        case FETCHING_DATA_TURNSTILE_REQUEST:
            return { ...state, isFetching: true };
        case FETCHING_DATA_TURNSTILE_FAILURE:
            return { ...state, isFetching: false, errorMessage: action.payload }
        case FETCHING_DATA_TURNSTILE_SUCCESS:
            return { ...state, isFetching: false, data: action.payload }
        default: return state;
    }
}