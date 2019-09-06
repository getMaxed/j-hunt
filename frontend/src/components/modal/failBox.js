import React from 'react';

export default function FailBox({ setFailed }) {
    return (
        <>
            <label htmlFor="failed" style={{ color: `red` }}>
                Check if failed
            </label>
            <input
                id="failed"
                type="checkbox"
                onChange={() => setFailed(s => !s)}
            />
            <br /> <br />
        </>
    );
}
