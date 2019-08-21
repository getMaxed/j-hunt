import { TOGGLE_IS_AUTHENTICATED } from './index';

export const setIsAuthenticated = () => async dispatch => {
    dispatch({
        type: TOGGLE_IS_AUTHENTICATED
    });
};
