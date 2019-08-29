import {
    LOAD_COMPANIES,
    ADD_COMPANY_SUCCESS,
    SET_ADDING_COMPANY,
    ADD_COMPANY_FAILURE,
    UPDATE_COMPANY
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
        case ADD_COMPANY_SUCCESS:
            return {
                ...state,
                active: [...state.active, payload],
                adding: null
            };
        case ADD_COMPANY_FAILURE:
            return {
                ...state,
                isError: true
            };
        case UPDATE_COMPANY:
            console.log(`action: update company`);
        default:
            return state;
    }
};
