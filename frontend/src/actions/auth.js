import axios from `axios`;
import { setAlert } from `./alert`
import { REGISTER_SUCCESS, REGISTER_FAILURE } from './index';

export const register = ({ username, password }) = async dispatch => {
    const config = {
        headers: {
            'Content-type': `application/json`
        }
    }

    const body = JSON.stringify({ username, password });

    try {
        const res = await axios.post(`/api/users`, body, config);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data.token
        })
        dispatch(setAlert(`success`, `user registered`))
    } catch (err) {
        dispatch({
            type: REGISTER_FAILURE
        })
        const errors = err.response.data.errors;
        if (errors) {
            const errorMsg = errors.reduce((acc, curr, idx) => idx === 0 ? acc + curr.msg : curr.msg + ` and ` + curr.msg, '');
            dispatch(setAlert(`failure`, errorMsg))
        }

    }
}