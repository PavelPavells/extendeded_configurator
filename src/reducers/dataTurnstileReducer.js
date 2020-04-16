// ********** IMPORT VARIABLES FROM TYPES ********** //
import { 
    FETCHING_DATA_TURNSTILE_REQUEST, 
    FETCHING_DATA_TURNSTILE_SUCCESS, 
    FETCHING_DATA_TURNSTILE_FAILURE,
    TOGGLE_MODAL_TURNSTILE,
    TOGGLE_MODAL_TURNSTILE_MAIN_INFO
} from '../constants/constants';

const initialState = {
    isFetching: false,
    errorMessage: '',
    modal: false,
    info: false,
    data: [],
    app_id: 'id',
    trigger: 0,
    trigger_state: 0,
    seria: 0,
    button_seria_state: 0,
    button_corpse_state: 0,
    selectOne: 0, // page_view.module_selectors[0].state !== -1 ? page_view.module_selectors[0].state : 0,
    selectTwo: 0, // page_view.module_selectors[1].state !== -1 ? page_view.module_selectors[1].state : 0,
    selectThree: 0, //  page_view.module_selectors[2].state !== -1 ? page_view.module_selectors[2].state : 0,
    selectFour: 0, //  page_view.module_selectors[3].state !== -1 ? page_view.module_selectors[3].state : 0,
    selectFive: 0, //  page_view.module_selectors[4].state !== -1 ? page_view.module_selectors[4].state : 0,
    selectSix: 0, //  page_view.module_selectors[5].state !== -1 ? page_view.module_selectors[5].state : 0,
    selectSeven: 0, //  page_view.module_selectors[6].state !== -1 ? page_view.module_selectors[6].state : 0,
    selectEight: 0, //  page_view.module_selectors[7].state !== -1 ? page_view.module_selectors[7].state : 0
}

// ********** REDUCER FOR DATA MAIN REQUEST ********** //
export default function(state = initialState, action) {
    switch(action.type) {
        case FETCHING_DATA_TURNSTILE_REQUEST:
            return { ...state, isFetching: true, trigger: action.trigger };
        case FETCHING_DATA_TURNSTILE_FAILURE:
            return { ...state, isFetching: false, errorMessage: action.payload, trigger: action.trigger }
        case FETCHING_DATA_TURNSTILE_SUCCESS:
            return { ...state, isFetching: false, data: action.payload, trigger: action.trigger }
        case TOGGLE_MODAL_TURNSTILE:
            return {...state, isFetching: false, modal: !state.modal}
        case TOGGLE_MODAL_TURNSTILE_MAIN_INFO:
            return { ...state, isFetching: false, info: !state.info }
        default: return state;   
    }
}