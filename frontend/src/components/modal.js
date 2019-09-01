import React from 'react';
import { Modal as StyledModal } from './styled';
import { stageList } from '../utils';

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

    const renderText = () =>
        type !== `edit` &&
        (type === `inq`
            ? `Making inquiry #${value++}`
            : `Changing stage to ${stageList[stageList.indexOf(value) + 1]}`);

    return (
        <StyledModal>
            {!type === `view` ? (
                <form onSubmit={e => handleSubmit(e)}>
                    {type === `edit` ? (
                        target === `note` ? (
                            // todo: add labels
                            <textarea
                                cols="30"
                                rows="10"
                                value={value}
                            ></textarea>
                        ) : (
                            <input type="text" value={value} />
                        )
                    ) : (
                        <>
                            <h2>{renderText()}</h2>
                            <textarea
                                cols="30"
                                rows="10"
                                // todo: get `note` value
                                // value={}
                            ></textarea>
                            {target === `stage` && (
                                <input
                                    type="checkbox"
                                    style={{ color: `red` }}
                                />
                            )}
                        </>
                    )}
                    {/* permanent */}
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
            ) : (
                <p>View</p>
            )}
        </StyledModal>
    );
}
