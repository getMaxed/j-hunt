import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from './store';
import AuthForm from './components/authForm';
import Alert from './components/alert';
import Logout from './components/logout';
import Dashboard from './components/dashboard';
import { loadUser } from './actions/auth';

let App = ({ isAuthenticated, isAlert }) => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <>
            {isAuthenticated ? (
                <>
                    {isAlert && <Alert />}
                    <Logout />
                    <Dashboard />
                </>
            ) : (
                <>
                    {isAlert && <Alert />}
                    <AuthForm />
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
    isAuthenticated: state.auth.isAuthenticated,
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
