import React from 'react';
import { formatTimeDistance } from '../../../utils';
import { Td, Tr } from './x_style';

export default function Company({ company, isEven, openModal }) {
    const {
        _id,
        company_name,
        intermediary,
        link,
        source,
        stage,
        stage_inq_count,
        note,
        first_inq_on,
        last_inq_on
    } = company;

    const xRefs = { company_name, intermediary, note };

    const firstInq = formatTimeDistance(first_inq_on);
    const lastInq = last_inq_on && formatTimeDistance(last_inq_on);
    const goto = url => window.open(url, '_blank');

    return (
        <Tr isEven={isEven}>
            <Td
                onClick={() => openModal(`edit`, { company_name, xRefs }, _id)}
                width="170px"
            >
                {company_name}
            </Td>
            <Td
                width="170px"
                onClick={() => openModal(`edit`, { intermediary, xRefs }, _id)}
            >
                {intermediary}
            </Td>
            <Td width="80px" onClick={() => goto(link)}>
                {source}
            </Td>
            <Td
                width="80px"
                onClick={() => openModal(`changeStage`, { stage, xRefs }, _id)}
            >
                {stage}
            </Td>
            <Td
                width="230px"
                onClick={() => openModal(`edit`, { note, xRefs }, _id)}
            >
                {note}
            </Td>
            <Td width="120px">{firstInq}</Td>
            <Td width="120px">{lastInq}</Td>
            <Td
                onClick={() =>
                    stage_inq_count < 3 &&
                    openModal(`inq`, { stage_inq_count, xRefs }, _id)
                }
            >
                {stage_inq_count}
            </Td>
        </Tr>
    );
}
