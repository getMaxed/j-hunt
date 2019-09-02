import { OPEN_MODAL, CLOSE_MODAL } from '../actions';

const initialState = {
    isOpen: false,
    type: null,
    target: null,
    value: null,
    refNote: null,
    refId: null
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case OPEN_MODAL:
            return {
                ...state,
                isOpen: true,
                ...payload
            };
        case CLOSE_MODAL:
            return {
                ...state,
                ...initialState
            };
        default:
            return state;
    }
};
