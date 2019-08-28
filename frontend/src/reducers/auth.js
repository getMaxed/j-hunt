import {
    AUTH_SUCCESS,
    AUTH_FAILURE,
    REG_FAILURE,
    REG_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from '../actions';

const initialState = {
    isLoading: true,
    isAuthenticated: null,
    token: localStorage.getItem(`token`),
    user: null
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                user: payload
            };
        case REG_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem(`token`, payload);
            return {
                ...state,
                isAuthenticated: true,
                token: payload
            };
        case AUTH_FAILURE:
        case REG_FAILURE:
        case LOGIN_FAILURE:
            localStorage.removeItem(`token`);
            return {
                ...state,
                isLoading: false,
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
