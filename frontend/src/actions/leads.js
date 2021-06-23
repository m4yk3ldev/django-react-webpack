import axios from 'axios';
import {ADD_LEAD, DELETE_LEAD, GET_LEADS} from "./types";

// GET LEADS
export const getLeads = () => dispatch => {
    axios.get('/api/leads/').then(data => {
        dispatch({
            type: GET_LEADS,
            payload: data.data
        });
    }).catch(err => console.log(err));
}

// DELETE LEAD
export const deleteLead = (id) => dispatch => {
    axios.delete('/api/leads/' + id).then(data => {
        dispatch({
            type: DELETE_LEAD,
            payload: id
        });
    }).catch(err => console.log(err));
}

// ADD LEAD
export const addLead = (lead) => dispatch => {
    axios.post('/api/leads/', lead).then(data => {
        dispatch({
            type: ADD_LEAD,
            payload: data.data
        });
    }).catch(err => console.log(err));
}