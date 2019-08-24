import { SET_ALERT, CLEAR_ALERT } from './index';

export const setAlert = (type, msg) => async (dispatch, getState) => {
    const { msg: msgExists } = getState().alert;
    if (msgExists) {
        const { timeoutId } = getState().alert;
        clearTimeout(timeoutId);
        dispatch({ type: CLEAR_ALERT });
    }
    const timeoutId = setTimeout(() => {
        dispatch({ type: CLEAR_ALERT });
    }, 2000);
    dispatch({
        type: SET_ALERT,
        payload: { msg, type, timeoutId }
    });
};
