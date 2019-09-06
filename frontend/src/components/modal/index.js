import React from 'react';
import { Modal as StyledModal } from '../styled';
import { stageList } from '../../utils';
import Note from './note';
import Name from './name';
import ChangeStage from './changeStage';
import Inq from './inq';

export default function Modal({
    closeModal: close,
    updateCompany,
    type,
    target,
    value: v,
    refNote,
    refId
}) {
    const [value, setValue] = React.useState(type === `edit` ? v : refNote);
    const [failed, setFailed] = React.useState(false);

    const title = (target, type) => {
        if (type === `edit` && target !== `note`) {
            return target === `company_name`
                ? `Edit a Company name`
                : `Edit an Intermediary name`;
        }

        const lastStage = stageList.indexOf(v) === 3;
        if (type === `changeStage`) {
            if (lastStage) {
                return `This is the last stage`;
            } else {
                return `Changing stage to ${
                    stageList[stageList.indexOf(v) + 1]
                }`;
            }
        } else {
            return `Making new inquiry`;
        }
    };

    function handleSubmit(e, isFailed) {
        e.preventDefault();
        updateCompany({ refId, type, target, value, failed: isFailed });
    }

    return (
        <StyledModal>
            <form onSubmit={e => handleSubmit(e, failed)}>
                {type === `edit` ? (
                    target === `note` ? (
                        <Note
                            title="Edit a note"
                            value={value}
                            setValue={setValue}
                        />
                    ) : (
                        <Name
                            title={title(target, type)}
                            value={value}
                            setValue={setValue}
                        />
                    )
                ) : type === `changeStage` ? (
                    <ChangeStage
                        title={title(target, type)}
                        value={value}
                        setValue={setValue}
                        setFailed={setFailed}
                    />
                ) : (
                    <Inq
                        title={title(target, type)}
                        value={value}
                        setValue={setValue}
                    />
                )}
                <input type="submit" value="Submit" />
                <button onClick={() => close()}>Cancel</button>
            </form>
        </StyledModal>
    );
}
