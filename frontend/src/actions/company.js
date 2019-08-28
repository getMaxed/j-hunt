import axios from 'axios';
import { ADD_COMPANY, LOAD_COMPANIES } from './index';
import { setAlert } from './alert';

const httpConfig = {
    headers: {
        'Content-type': `application/json`
    }
};
const loadUrl = `http://localhost:5000/api/companies`;
const addUrl = `http://localhost:5000/api/companies/add`;

export const loadCompanies = () => async (dispatch, getState) => {
    try {
        const userId = getState().auth.user._id;
        const body = JSON.stringify({ userId });
        const res = await axios.post(loadUrl, body, httpConfig);
        dispatch({
            type: LOAD_COMPANIES,
            payload: res.data
        });
    } catch (err) {
        // todo: handle errors
        console.error(err);
    }
};

export const addCompany = companyData => async (dispatch, getState) => {
    try {
        const userId = getState().auth.user._id;
        const body = JSON.stringify({ userId, ...companyData });
        await axios.post(addUrl, body, httpConfig);
    } catch (err) {
        // todo: handle errors
        const error = err.response && err.response.data.error;
        if (error) {
            dispatch(setAlert(`failure`, error));
        }
    }
    dispatch({
        type: ADD_COMPANY,
        payload: companyData
    });
};

// export const getInq = () => dispatch => {
//     console.log(`action: get inquiries`);
// };

// export const updateInq = () => dispatch => {
//     console.log(`action: update inquiries`);
// };
