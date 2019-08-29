import { LOAD_COMPANIES, ADD_COMPANY, UPDATE_COMPANY } from '../actions';

const initialState = {
    list: [],
    curr: {},
    isLoading: true
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOAD_COMPANIES:
            return {
                ...state,
                list: payload,
                curr: payload[0],
                isLoading: false
            };
        case ADD_COMPANY:
            return {
                ...state,
                list: [...state.list, payload]
            };
        case UPDATE_COMPANY:
            console.log(`action: update company`);
        default:
            return state;
    }
};
