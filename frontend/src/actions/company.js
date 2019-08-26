import axios from 'axios';
import { ADD_COMPANY } from './index';

const httpConfig = {
    headers: {
        'Content-type': `application/json`
    }
};

const url = `http://localhost:5000/api/companies`;

export const addCompany = companyData => async (dispatch, getState) => {
    const user = getState().auth.user._id;
    const body = JSON.stringify({ user, ...companyData });
    const res = await axios.post(url, body, httpConfig);
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
