import { OPEN_MODAL, CLOSE_MODAL } from '../actions';

export const openModal = (type, target, value) => dispatch => {
    dispatch({
        type: OPEN_MODAL,
        payload: { type, target, value }
    });
};

export const closeModal = () => dispatch => {
    dispatch({
        type: CLOSE_MODAL
    });
    console.log(`CLOSE MODAL`);
};
