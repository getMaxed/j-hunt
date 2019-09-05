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
            const [active, failed] = payload;
            const time = t => new Date(t).getTime();

            active.sort((a, b) => time(a.first_inq_on) - time(b.first_inq_on));
            failed.sort((a, b) => time(b.failed_on) - time(a.failed_on));

            return {
                ...state,
                active,
                failed,
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
            const activeCompanies = [...state.active];
            const failedCompanies = [...state.failed];
            const idx = state.active.findIndex(c => c._id === payload._id);

            if (payload.stage === `failed`) {
                activeCompanies.splice(idx, 1);
                failedCompanies.unshift(payload);
            } else {
                activeCompanies[idx] = payload;
            }

            return {
                ...state,
                active: activeCompanies,
                failed: failedCompanies
            };
        case CLEAR_COMPANIES:
            return {
                ...initialState
            };
        default:
            return state;
    }
};
