import { combineReducers } from 'redux';
import modal from './modal';
import auth from './auth';
import alert from './alert';
import inquiry from './inquiry';

export default combineReducers({
    modal,
    auth,
    alert,
    inquiry
});
