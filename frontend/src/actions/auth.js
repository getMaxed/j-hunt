import axios from 'axios';
import { setAlert } from './alert';
import {
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
const loginUrl = `http://localhost:5000/api/auth`;
const registerUrl = `http://localhost:5000/api/users`;

const errorMsg = errors =>
    errors.reduce(
        (acc, curr, idx) =>
            idx === 0 ? acc + curr.msg : acc + ` and ` + curr.msg,
        ''
    );

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
        const errors = err.response.data.errors;
        console.log(errors);
        if (errors) {
            dispatch(setAlert(`failure`, errorMsg(errors)));
        }
    }
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
        const errors = err.response.data.errors;
        console.log(errors);
        if (errors) {
            dispatch(setAlert(`failure`, errorMsg(errors)));
        }
    }
};

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    });
    dispatch(setAlert(`info`, `user logged out`));
};
