import React from 'react';

export default function Name({ title, value, setValue }) {
    return (
        <>
            <label htmlFor="input">{title}</label> <br />
            <input
                id="input"
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <br /> <br />
        </>
    );
}
