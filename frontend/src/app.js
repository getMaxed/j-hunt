import React from 'react';
import { Provider, connect } from 'react-redux';
import { loadUser } from './actions/auth';
import store from './store';
import AuthForm from './components/authForm';
import Alert from './components/alert';
import Logout from './components/logout';
import Dashboard from './components/dashboard';

let App = ({ isAuthenticated, isAlert }) => {
    React.useEffect(() => {
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
