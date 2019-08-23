import axios from 'axios';
import { setAlert } from './alert';
import { REGISTER_SUCCESS, REGISTER_FAILURE } from './index';

const config = {
    headers: {
        'Content-type': `application/json`
    }
};
const loginUrl = `api/users`;
const registerUrl = `api/auth`;

export const login = (username, password) => async dispatch => {
    const body = JSON.stringify({ username, password });
    try {
        // const res = await axios.post(loginUrl, body, config);
        // dispatch({
        //     type: REGISTER_SUCCESS,
        //     payload: res.data.token
        // })
        console.log(body);
        dispatch(setAlert(`success`, `user logged in`));
    } catch (err) {
        // const errors = err.response.data.errors
        // dispatch({
        //     type: REGISTER_FAILURE
        // })
        console.error(err);
        dispatch(setAlert(`failure`, `user logged in`));
    }
};

export const register = (username, password, password2) => async dispatch => {
    const body = JSON.stringify({ username, password, password2 });
    try {
        // const res = await axios.post(loginUrl, body, config);
        console.log(body);
        dispatch(setAlert(`success`, `user registered`));
    } catch (err) {
        // const errors = err.response.data.errors
        // if (errors) {
        //     const errorMsg = errors.reduce((acc, curr, idx) => idx === 0 ? acc + curr.msg : curr.msg + ` and ` + curr.msg, '');
        //     dispatch(setAlert(`failure`, errorMsg))
        // }
        // dispatch({
        //     type: REGISTER_FAILURE
        // })
        console.error(err);
        dispatch(setAlert(`failure`, `user logged in`));
    }
};
