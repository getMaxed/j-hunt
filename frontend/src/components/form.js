import React, { useState } from 'react';
import { login, register } from '../actions/auth';
import { setAlert } from '../actions/alert';
import { connect } from 'react-redux';

const Form = ({ login, register, setAlert }) => {
    const emptyInput = {
        username: '',
        password: '',
        password2: ''
    };
    const [isLoggingIn, setIsLoggingIn] = useState(true);
    const [inputData, setInputData] = useState(emptyInput);
    const { username, password, password2 } = inputData;
    const submitBtnValue = isLoggingIn ? `Log In` : `Sign Up`;

    function handleInputChange(e) {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        isLoggingIn
            ? login(username, password)
            : password !== password2
            ? setAlert(`failure`, `passwords don't match`)
            : register(username, password);
        setInputData(emptyInput);
    }

    function handlePageChange(e, isLoggingIn) {
        e.preventDefault();
        setIsLoggingIn(isLoggingIn);
    }

    return (
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
                    type="text"
                    name="password"
                    value={password}
                    onChange={e => handleInputChange(e)}
                />{' '}
                <br />
                {!isLoggingIn && (
                    <input
                        type="text"
                        name="password2"
                        value={password2}
                        onChange={e => handleInputChange(e)}
                    />
                )}
                <br />
                <input type="submit" value={submitBtnValue} />
            </form>
        </>
    );
};

export default connect(
    null,
    { login, register, setAlert }
)(Form);
