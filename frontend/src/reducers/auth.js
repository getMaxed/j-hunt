import { REGISTER_FAILURE, REGISTER_SUCCESS } from '../actions';

const initialState = {
    token: localStorage.getItem(`token`),
    isAuthenticated: null
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case REGISTER_SUCCESS:
            console.log(`reducer: register success`);
            return state;
        // localStorage.setItem(`token`, payload);
        // return {
        //     ...state,
        //     token: payload,
        //     isAuthenticated: true
        // };
        case REGISTER_FAILURE:
            console.log(`reducer: register success`);
            return state;
        // localStorage.removeItem(`token`);
        // return {
        //     ...state,
        //     token: null,
        //     isAuthenticated: false
        // };
        default:
            return state;
    }
};
