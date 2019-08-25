import {
    REG_FAILURE,
    REG_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from '../actions';

const initialState = {
    isAuthenticated: null,
    token: localStorage.getItem(`token`)
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case REG_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem(`token`, payload);
            return {
                ...state,
                isAuthenticated: true,
                token: payload
            };
        case REG_FAILURE:
        case LOGIN_FAILURE:
            localStorage.removeItem(`token`);
            return {
                ...state,
                token: null,
                isAuthenticated: false
            };
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false
            };
        default:
            return state;
    }
};
