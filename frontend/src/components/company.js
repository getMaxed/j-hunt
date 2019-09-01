import React from 'react';
import { formatTimeDistance } from '../utils';
import { CompanyTd as StyledTd, CompanyTr as StyledTr } from './styled';

export default function Company({ company, isEven, openModal }) {
    const {
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

    const firstInq = formatTimeDistance(first_inq_on);
    const lastInq = last_inq_on && formatTimeDistance(last_inq_on);
    const goto = url => window.open(url, '_blank');

    return (
        <StyledTr isEven={isEven}>
            <StyledTd
                onClick={() => openModal(`edit`, company_name)}
                width="170px"
            >
                {company_name}
            </StyledTd>
            <StyledTd
                width="170px"
                onClick={() => openModal(`edit`, intermediary)}
            >
                {intermediary}
            </StyledTd>
            <StyledTd width="80px" onClick={() => goto(link)}>
                {source}
            </StyledTd>
            <StyledTd
                width="80px"
                onClick={() => openModal(`changeStage`, stage)}
            >
                {stage}
            </StyledTd>
            <StyledTd width="230px" onClick={() => openModal(`edit`, note)}>
                {note}
            </StyledTd>
            <StyledTd width="120px">{firstInq}</StyledTd>
            <StyledTd width="120px">{lastInq}</StyledTd>
            <StyledTd onClick={() => openModal(`inq`, stage_inq_count)}>
                {stage_inq_count}
            </StyledTd>
        </StyledTr>
    );
}
