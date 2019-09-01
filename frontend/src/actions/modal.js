import { OPEN_MODAL, CLOSE_MODAL } from '../actions';

export const openModal = (type, target) => dispatch => {
    dispatch({
        type: OPEN_MODAL,
        payload: { type, target }
    });
    console.log(`OPEN MODAL`);
    console.log(`type`, type);
    console.log(`target`, target);
    console.log(`END OPEN MODAL`);
};

export const closeModal = () => dispatch => {
    dispatch({
        type: CLOSE_MODAL
    });
    console.log(`CLOSE MODAL`);
};
