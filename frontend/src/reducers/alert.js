import { SET_ALERT, CLEAR_ALERT } from '../actions';

const initialState = {
    type: null,
    msg: null,
    timeoutId: null
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_ALERT:
            console.log(`alert has been set`, payload);
            return {
                ...state,
                ...payload
            };
        case CLEAR_ALERT:
            console.log(`alert has been cleared`);
            return {
                ...state,
                status: null,
                msg: null,
                timeoutId: null
            };
        default:
            return state;
    }
};
