import axios from 'axios';
import {createMessage, returnErrors} from "./messages";
import {ADD_LEAD, DELETE_LEAD, GET_LEADS} from "./types";

// GET LEADS
export const getLeads = () => (dispatch, getState) => {
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
    axios.get('/api/leads/', config).then(data => {
        dispatch({
            type: GET_LEADS,
            payload: data.data
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE LEAD
export const deleteLead = (id) => (dispatch, getState) => {
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
    axios.delete('/api/leads/' + id, config).then(() => {
        dispatch(createMessage({deleteLead: "Delete Lead"}))
        dispatch({
            type: DELETE_LEAD,
            payload: id
        });
    }).catch(err => console.log(err));
};

// ADD LEAD
export const addLead = (lead) => (dispatch, getState) => {

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
    axios.post('/api/leads/', lead, config).then(data => {
        dispatch(createMessage({addLead: "Lead Added"}));
        dispatch({
            type: ADD_LEAD,
            payload: data.data
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};