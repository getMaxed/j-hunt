const initialState = {
    isAuthenticated: false,
    isLoading: true
};

export default (state = initialState, action) => {
    switch (action.type) {
        // case TOGGLE_IS_AUTHENTICATED:
        //     return {
        //         ...state,
        //         isAuthenticated: !state.isAuthenticated
        //     };
        default:
            return state;
    }
};
