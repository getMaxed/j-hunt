import {
    LOAD_COMPANIES,
    ADD_COMPANY,
    SET_ADDING_COMPANY,
    UPDATE_COMPANY,
    CLEAR_COMPANIES
} from '../actions';

const initialState = {
    active: [],
    failed: [],
    isLoading: true,
    adding: null
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOAD_COMPANIES:
            return {
                ...state,
                active: payload,
                isLoading: false
            };
        case SET_ADDING_COMPANY:
            return {
                ...state,
                adding: payload
            };
        case ADD_COMPANY:
            return {
                ...state,
                active: [...state.active, payload],
                adding: null
            };
        case UPDATE_COMPANY:
            return console.log(`action: update company`);
        case CLEAR_COMPANIES:
            return {
                ...initialState
            };
        default:
            return state;
    }
};
