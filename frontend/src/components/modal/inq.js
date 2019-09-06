import React from 'react';
import Note from './note';

export default function ChangeStage({ title, value, setValue }) {
    return <Note title={title} value={value} setValue={setValue} />;
}
