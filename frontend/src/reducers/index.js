import { combineReducers } from 'redux';
import modal from './modal';
import auth from './auth';
import alert from './alert';
import company from './company';

export default combineReducers({
    modal,
    auth,
    alert,
    company
});
