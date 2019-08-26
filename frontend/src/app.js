import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from './store';
import Form from './components/form';
import Alert from './components/alert';
import Logout from './components/logout';
import Modal from './components/modal';
import InqWrapper from './components/inqWrapper';
import { loadUser } from './actions/auth';

let App = ({ isModalOpen, isAuthenticated, isAlert }) => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <>
            {!isModalOpen ? (
                <>
                    {isAuthenticated ? (
                        <>
                            {isAlert && <Alert />}
                            <Logout />
                            <InqWrapper />
                        </>
                    ) : (
                        <>
                            {isAlert && <Alert />}
                            <Form />
                        </>
                    )}
                </>
            ) : (
                <Modal />
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
    isModalOpen: state.modal.isOpen,
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
