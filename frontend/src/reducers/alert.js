import { SET_ALERT, CLEAR_ALERT } from '../actions';

const initialState = {
    type: null,
    msg: null,
    timeoutId: null
};

export default (state = initialState, action) => {
    const { type, payload } = action.type;

    switch (type) {
        case SET_ALERT:
            return {
                ...state,
                ...payload
            };
        case CLEAR_ALERT:
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
