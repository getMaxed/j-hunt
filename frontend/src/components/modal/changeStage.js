import React from 'react';
import Note from './note';
import FailBox from './failBox';

export default function ChangeStage({ title, value, setValue, setFailed }) {
    return (
        <>
            <Note title={title} value={value} setValue={setValue} />
            <FailBox setFailed={setFailed} />
        </>
    );
}
