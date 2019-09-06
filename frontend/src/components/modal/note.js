import React from 'react';

export default function Textarea({ title, value, setValue }) {
    return (
        <>
            <label htmlFor="note">{title}</label> <br />
            <textarea
                id="note"
                cols="30"
                rows="5"
                value={value}
                onChange={e => setValue(e.target.value)}
            ></textarea>
            <br /> <br />
        </>
    );
}
