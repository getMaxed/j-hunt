import { TOGGLE_IS_AUTHENTICATED } from '../actions';

const initialState = {
    isAuthenticated: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_AUTHENTICATED:
            return {
                ...state,
                isAuthenticated: !state.isAuthenticated
            };
        default:
            return state;
    }
};
