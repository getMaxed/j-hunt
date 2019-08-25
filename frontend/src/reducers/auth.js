import { REG_FAILURE, REG_SUCCESS } from '../actions';

const initialState = {
    isAuthenticated: null,
    token: localStorage.getItem(`token`)
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case REG_SUCCESS:
            console.log(`reducer: register success`);
            return state;
        // localStorage.setItem(`token`, payload);
        // return {
        //     ...state,
        //     token: payload,
        //     isAuthenticated: true
        // };
        case REG_FAILURE:
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
