import axios from 'axios';
import { setAlert } from './alert';
import { loadCompanies } from './company';
import {
    AUTH_SUCCESS,
    AUTH_FAILURE,
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

const authUrl = `http://localhost:5000/api/auth`;
const loginUrl = `http://localhost:5000/api/login`;
const registerUrl = `http://localhost:5000/api/register`;

export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get(authUrl);
        dispatch({
            type: AUTH_SUCCESS,
            payload: res.data
        });
        dispatch(loadCompanies());
    } catch (err) {
        dispatch({
            type: AUTH_FAILURE
        });
        console.error(err.response.data.error);
    }
};

export const login = (username, password) => async dispatch => {
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
    console.log('register1');
    const body = JSON.stringify({ username, password });
    try {
        const res = await axios.post(registerUrl, body, httpConfig);
        dispatch({
            type: REG_SUCCESS,
            payload: res.data.token
        });
        console.log(`success`);
        dispatch(setAlert(`success`, `user registered`));
        console.log(`success2`);
    } catch (err) {
        dispatch({
            type: REG_FAILURE
        });
        console.log(`failllll`);
        console.error(err);
        // const error = err.response.data.error;
        // if (error) {
        //     dispatch(setAlert(`failure`, error));
        // }
    }
};
