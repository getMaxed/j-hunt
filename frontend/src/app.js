import React from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from './store';

let App = ({ isAuthenticated }) => {
    return (
        <>
            {isAuthenticated ? (
                <>
                    <p>...AUTHED...</p>
                </>
            ) : (
                <>
                    <p>...NOT AUTHED...</p>
                </>
            )}
        </>
    );
};

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
