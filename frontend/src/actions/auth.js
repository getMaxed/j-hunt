import axios from 'axios';
import { setAlert } from './alert';
import {
    LOAD_USER_SUCCESS,
    LOAD_USER_FAILURE,
    REG_SUCCESS,
    REG_FAILURE,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from './index';

const httpConfig = {
    headers: {
        'Content-type': `application/json`
    }
};
const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['x-auth-token'] = token;
    } else {
        delete axios.defaults.headers.common['x-auth-token'];
    }
};

const loginUrl = `http://localhost:5000/api/login`;
const registerUrl = `http://localhost:5000/api/register`;

export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get(loginUrl);
        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: LOAD_USER_FAILURE
        });
        dispatch(setAlert(`failure`, `couldn't load a user`));
    }
};

export const login = (username, password) => async dispatch => {
    console.log('asdfasdf');
    const body = JSON.stringify({ username, password });
    try {
        const res = await axios.post(loginUrl, body, httpConfig);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data.token
        });
        dispatch(setAlert(`success`, `user logged in`));
    } catch (err) {
        dispatch({
            type: LOGIN_FAILURE
        });
        const error = err.response.data.error;
        if (error) {
            dispatch(setAlert(`failure`, error));
        }
    }
};

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    });
    dispatch(setAlert(`info`, `user logged out`));
};

export const register = (username, password) => async dispatch => {
    const body = JSON.stringify({ username, password });
    try {
        const res = await axios.post(registerUrl, body, httpConfig);
        dispatch({
            type: REG_SUCCESS,
            payload: res.data.token
        });
        dispatch(setAlert(`success`, `user registered`));
    } catch (err) {
        dispatch({
            type: REG_FAILURE
        });
        const error = err.response.data.error;
        if (error) {
            dispatch(setAlert(`failure`, error));
        }
        console.log(err.response);
    }
};
