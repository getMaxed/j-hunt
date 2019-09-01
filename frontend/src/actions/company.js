import axios from 'axios';
import { slugify } from '../utils';
import { ADD_COMPANY, LOAD_COMPANIES, SET_ADDING_COMPANY } from './index';
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

        const companies = res.data.reduce(
            (acc, curr) => (acc[+isNaN(curr.failed_on)].push(curr), acc),
            [[], []]
        );
        dispatch({
            type: LOAD_COMPANIES,
            payload: companies
        });
    } catch (err) {
        console.error(err);
    }
};

export const addCompany = companyData => async (dispatch, getState) => {
    if (companyExists())
        return dispatch(setAlert(`failure`, `company already exists`));

    try {
        const userId = getState().auth.user._id;
        const body = JSON.stringify({ userId, ...companyData });
        const company = await axios.post(addUrl, body, httpConfig);
        dispatch({
            type: ADD_COMPANY,
            payload: company.data
        });
        dispatch(setAlert(`success`, `company added successfully`));
    } catch (err) {
        const error = err.response && err.response.data.error;
        if (error) {
            dispatch(setAlert(`failure`, error));
        } else {
            dispatch(setAlert(`failure`, `some error: coudn't submit`));
        }
    }

    function companyExists() {
        const getCompany = idx => Object.entries(getState().company)[idx][1];
        return [...getCompany(0), ...getCompany(1)].some(
            c =>
                (companyData.company_name &&
                    c.company_name_slug ===
                        slugify(companyData.company_name)) ||
                (companyData.intermediary &&
                    c.intermediary_slug === slugify(companyData.intermediary))
        );
    }
};

export const setAddingCompany = name => async dispatch => {
    dispatch({
        type: SET_ADDING_COMPANY,
        payload: name
    });
};

export const updateCompany = () => dispatch => {
    console.log(123);
};
