import React from 'react';
import { Modal as StyledModal } from './styled';

export default function Modal({
    closeModal: close,
    updateCompany,
    type,
    target,
    value: v
}) {
    const [value, setValue] = React.useState(v);
    function handleSubmit(e) {
        e.preventDefault();
        updateCompany(value);
    }

    // handle rendering here

    return (
        <>
            <StyledModal>
                <form onSubmit={e => handleSubmit(e)}>
                    <input
                        type="text"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <input
                        type="submit"
                        value="Submit"
                        onChange={e => setValue(e.target.value)}
                    />
                    <button onClick={() => close()}>Cancel</button>
                </form>
            </StyledModal>
        </>
    );
}
