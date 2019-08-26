import { ADD_COMPANY, UPDATE_COMPANY } from '../actions';

const initialState = {
    list: [],
    curr: {},
    isLoading: true
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_COMPANY:
            console.log(`action: add company`, payload);
            return state;
        case UPDATE_COMPANY:
            console.log(`action: update company`);
        default:
            return state;
    }
};
