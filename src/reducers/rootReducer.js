import { combineReducers } from 'redux';
import dataReducer from './dataMainReducer';
import dataTurnstile from './dataTurnstileReducer';

export default combineReducers({
    dataMain: dataReducer,
    dataTurnstile: dataTurnstile
})