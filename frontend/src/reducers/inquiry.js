import { GET_INQ, UPDATE_INQ } from '../actions';

const initialState = {
    list: [],
    curr: {},
    isLoading: true
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_INQ:
            console.log(`action: get inquiries`);
        case UPDATE_INQ:
            console.log(`action: update inquiries`);
        default:
            return state;
    }
};
