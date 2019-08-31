import React from 'react';
import styled from 'styled-components';
import { formatDistanceToNow } from 'date-fns';

const Td = styled.td`
    border: 1px solid #000;
    padding-left: 3px;
    max-width: ${props => props.width};
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
`;

export default function Company({ company, isEven, width }) {
    const firstInq = formatDistanceToNow(new Date(company.first_inq_on), {
        addSuffix: true
    });
    const lastInq =
        company.last_inq_on &&
        formatDistanceToNow(new Date(company.last_inq_on), {
            addSuffix: true
        });
    const goto = url => window.open(url, '_blank');

    return (
        <tr
            style={{
                backgroundColor: isEven ? '' : '#f2f2f2'
            }}
        >
            <Td width="170px">{company.company_name}</Td>
            <Td width="170px">{company.intermediary}</Td>
            <Td width="80px" onClick={() => goto(company.link)}>
                {company.source}
            </Td>
            <Td width="80px">{company.stage}</Td>
            <Td width="230px">{company.note}</Td>
            <Td width="120px">{firstInq}</Td>
            <Td width="120px">{lastInq}</Td>
            <Td>{company.stage_inq_count}</Td>
        </tr>
    );
}
