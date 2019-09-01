import React from 'react';
import { connect } from 'react-redux';
import { login, register } from '../actions/auth';
import { setAlert } from '../actions/alert';

const Form = ({ login, register, setAlert, isLoading }) => {
    const emptyInput = {
        username: '',
        password: '',
        password2: ''
    };
    const [isLoggingIn, setIsLoggingIn] = React.useState(true);
    const [inputData, setInputData] = React.useState(emptyInput);
    const { username, password, password2 } = inputData;
    const submitBtnValue = isLoggingIn ? `Log In` : `Sign Up`;

    function handleInputChange(e) {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        isLoggingIn
            ? login(username.trim(), password)
            : password !== password2
            ? setAlert(`failure`, `passwords don't match`)
            : register(username.trim(), password);
        setInputData(emptyInput);
    }

    function handlePageChange(e, isLoggingIn) {
        e.preventDefault();
        setIsLoggingIn(isLoggingIn);
    }

    return (
        <>
            {!isLoading ? (
                <>
                    <a href="" onClick={e => handlePageChange(e, true)}>
                        Log In
                    </a>
                    |||
                    <a href="" onClick={e => handlePageChange(e, false)}>
                        Sign Up
                    </a>
                    <form onSubmit={e => handleSubmit(e)}>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={e => handleInputChange(e)}
                        />{' '}
                        <br />
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={e => handleInputChange(e)}
                        />{' '}
                        <br />
                        {!isLoggingIn && (
                            <input
                                type="password"
                                name="password2"
                                value={password2}
                                onChange={e => handleInputChange(e)}
                            />
                        )}
                        <br />
                        <input type="submit" value={submitBtnValue} />
                    </form>
                </>
            ) : (
                ''
            )}
        </>
    );
};

const mapStateToProps = state => ({
    isLoading: state.auth.isLoading
});

export default connect(
    mapStateToProps,
    { login, register, setAlert }
)(Form);
