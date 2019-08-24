import React from 'react';
import Form from './components/form';
import Alert from './components/alert';
import Logout from './components/logout';
import InqWrapper from './components/inqWrapper';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from './store';

let App = ({ isAuthenticated, isAlert }) => {
    return (
        <>
            {!isAuthenticated ? (
                <>
                    {isAlert && <Alert />}
                    <Form />
                </>
            ) : (
                <>
                    {isAlert && <Alert />}
                    <Logout />
                    <InqWrapper />
                </>
            )}
        </>
    );
};

/*
|--------------------------------------------------------------------------
| CONNECT APP TO STORE
|--------------------------------------------------------------------------
*/

const mapStateToProps = state => ({
    isAuthenticated: state.mode.isAuthenticated,
    isAlert: state.alert.type
});

App = connect(mapStateToProps)(App);

const AppWithStore = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

export default AppWithStore;
