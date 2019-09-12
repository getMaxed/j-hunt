import { OPEN_MODAL, CLOSE_MODAL } from '../actions';

export const openModal = (type, details, id) => dispatch => {
    const target = Object.keys(details)[0];
    const value = Object.values(details)[0];
    const refNote = details.xRefs.note || '';

    dispatch({
        type: OPEN_MODAL,
        payload: { type, target, value, refNote, refId: id }
    });
};

export const closeModal = () => dispatch => {
    dispatch({
        type: CLOSE_MODAL
    });
};
