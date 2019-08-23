import React, { useState } from 'react';

export default function Form() {
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [inputData, setInputData] = useState({
        username: '',
        password: '',
        password2: ''
    });
    const { username, password, password2 } = inputData;
    const submitBtnValue = isLoggingIn ? `Log In` : `Sign Up`;

    function handleInputChange(e) {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(username, password, password2);
    }

    return (
        <>
            <a onClick={setIsLoggingIn(true)}>Log In</a>
            <a onClick={setIsLoggingIn(false)}>Sign Up</a>
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
                {isLoggingIn && (
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
}
