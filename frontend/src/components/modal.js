import React from 'react';
import { Modal as StyledModal } from './styled';
import { stageList } from '../utils';

export default function Modal({
    closeModal: close,
    updateCompany,
    type,
    target,
    value: v,
    refNote,
    refId
}) {
    const [value, setValue] = React.useState(v);
    const [failed, setFailed] = React.useState(false);
    const textLabel =
        target === `company_name` ? `a Company name` : `an Intermediary name`;
    const textareaLabel =
        type === `inq`
            ? `Making inquiry #${value + 1}`
            : `Changing stage to ${stageList[stageList.indexOf(value) + 1]}`;

    function handleSubmit(e) {
        e.preventDefault();
        updateCompany(value);
    }

    return (
        <StyledModal>
            {type !== `view` ? (
                <form onSubmit={e => handleSubmit(e)}>
                    {type === `edit` ? (
                        target === `note` ? (
                            <>
                                <label htmlFor={target}>Edit a Note</label>{' '}
                                <br />
                                <textarea
                                    id={target}
                                    cols="30"
                                    rows="5"
                                    value={value}
                                ></textarea>
                                <br /> <br />
                            </>
                        ) : (
                            <>
                                <label htmlFor={target}>
                                    {`Edit ${textLabel}`}
                                </label>{' '}
                                <br />
                                <input
                                    id={target}
                                    type="text"
                                    value={value}
                                    onChange={e => setValue(e.target.value)}
                                />
                                <br /> <br />
                            </>
                        )
                    ) : (
                        <>
                            <label htmlFor="note">{textareaLabel}</label> <br />
                            <textarea
                                id="note"
                                cols="30"
                                rows="5"
                                value={refNote}
                            ></textarea>
                            <br /> <br />
                            {target === `stage` && (
                                <>
                                    {/* <br /> */}
                                    <label
                                        htmlFor="failed"
                                        style={{ color: `red` }}
                                    >
                                        Check if failed
                                    </label>
                                    <input
                                        id="failed"
                                        type="checkbox"
                                        onChange={() => setFailed(s => !s)}
                                    />
                                    <br /> <br />
                                </>
                            )}
                        </>
                    )}
                    <input type="submit" value="Submit" />
                    <button onClick={() => close()}>Cancel</button>
                </form>
            ) : (
                <p>View</p>
            )}
        </StyledModal>
    );
}
