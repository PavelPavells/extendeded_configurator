//****************** GLOBAL VARIABLES ******************//
//const site = "https://embedded.carddex.konstructor.online/api/dw";
const site = "https://embedded.carddex.master-conf.online/api/dw";
//const site = "http://172.16.3.81:9999/api/dw";
//const site = "http://10.7.1.35:9999/dw";
export default site;

/** ****************** REQUEST DATA TYPES MAIN BLOCK ****************** */
export const FETCHING_DATA_MAIN_REQUEST      = 'FETCHING_DATA_MAIN_REQUEST';
export const FETCHING_DATA_MAIN_SUCCESS      = 'FETCHING_DATA_MAIN_SUCCESS';
export const FETCHING_DATA_MAIN_FAILURE      = 'FETCHING_DATA_MAIN_FAILURE';

/** ****************** REQUEST DATA TYPES TURNSTILE BLOCK ****************** */
export const FETCHING_DATA_TURNSTILE_REQUEST = 'FETCHING_DATA_TURNSTILE_REQUEST';
export const FETCHING_DATA_TURNSTILE_SUCCESS = 'FETCHING_DATA_TURNSTILE_SUCCESS';
export const FETCHING_DATA_TURNSTILE_FAILURE = 'FETCHING_DATA_TURNSTILE_FAILURE';

/** ****************** REQUEST DATA TYPES BARRIER BLOCK ****************** */
export const FETCHING_DATA_BARRIER_REQUEST   = 'FETCHING_DATA_BARRIER_REQUEST';
export const FETCHING_DATA_BARRIER_SUCCESS   = 'FETCHING_DATA_BARRIER_SUCCESS';
export const FETCHING_DATA_BARRIER_FAILURE   = 'FETCHING_DATA_BARRIER_FAILURE';