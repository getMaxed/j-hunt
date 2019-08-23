import React from 'react';
import React, { useState, useRef } from 'react';
import Form from './components/form';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from './store';

let App = ({ isAuthenticated }) => {
    return (
        <>
            {!isAuthenticated ? (
                <>
                    <Form />
                </>
            ) : (
                <>
                    <p>...AUTHED...</p>
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
    isAuthenticated: state.mode.isAuthenticated
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
