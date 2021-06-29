import {AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS, USER_LOADED, USER_LOADING} from "./types";
import {returnErrors} from "./messages";
import axios from "axios";

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
//    User Loading
    dispatch({type: USER_LOADING});
//    GET TOKEN FROM STATE
    const token = getState().auth.token;
// HEADERS
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
//  If token, add to headers config
    if (token) {
        config.headers['Authorization'] = "Token " + token;
    }
    axios.get('api/auth/user', config).then(res => {
        dispatch({type: USER_LOADED, payload: res.data});
    }).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({type: AUTH_ERROR});
    })
}

// LOGIN USER
export const login = (username, password) => (dispatch) => {

// HEADERS
    const config = {
        headers: {
            'Content-Type': 'application/json'
        },
    }

    // REQUEST BODY
    const body = JSON.stringify({username, password});

    axios.post('api/auth/login', body, config).then(res => {
        dispatch({type: LOGIN_SUCCESS, payload: res.data});
    }).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({type: LOGIN_FAIL});
    })
}

//LOGOUT
export const logout = () => (dispatch, getState) => {

//    GET TOKEN FROM STATE
    const token = getState().auth.token;
// HEADERS
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
//  If token, add to headers config
    if (token) {
        config.headers['Authorization'] = "Token " + token;
    }
    axios.post('api/auth/logout', null, config).then(res => {
        dispatch({type: LOGOUT_SUCCESS});
    }).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({type: AUTH_ERROR});
    })
}