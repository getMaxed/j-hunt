import React from 'react';
import styled from 'styled-components';
import { formatDistanceToNow } from 'date-fns';

const Td = styled.td`
    border: 1px solid #000;
    padding-left: 3px;
    width: ${props => props.width};
    cursor: pointer;
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
    return (
        <tr
            style={{
                backgroundColor: isEven ? '' : '#f2f2f2'
            }}
        >
            <Td width="200px">{company.company_name}</Td>
            <Td width="200px">{company.intermediary}</Td>
            <Td width="80px">{company.source}</Td>
            <Td width="80px">{company.stage}</Td>
            <Td>{company.note}</Td>
            <Td width="140px">{firstInq}</Td>
            <Td width="140px">{lastInq}</Td>
            <Td>{company.stage_inq_count}</Td>
        </tr>
    );
}
