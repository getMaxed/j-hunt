import { OPEN_MODAL, CLOSE_MODAL } from '../actions';

export const openModal = (type, details) => (dispatch, getState) => {
    const target = Object.keys(details)[0];
    const value = Object.values(details)[0];
    const companyName = details.xRefs.company_name || '';
    const intermediary = details.xRefs.intermediary || '';
    const refNote = details.xRefs.note || '';

    const { active: companies } = getState().company;
    const refId = companies
        .filter(c => c[target] === value)
        .find(
            c =>
                c.company_name === companyName ||
                c.intermediary === intermediary
        )._id;

    dispatch({
        type: OPEN_MODAL,
        payload: { type, target, value, refNote, refId }
    });
};

export const closeModal = () => dispatch => {
    dispatch({
        type: CLOSE_MODAL
    });
    console.log(`CLOSE MODAL`);
};
