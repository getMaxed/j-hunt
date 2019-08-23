import { combineReducers } from 'redux';
import mode from './mode';
import auth from './auth';
import alert from './alert';

export default combineReducers({
    mode,
    auth,
    alert
});
