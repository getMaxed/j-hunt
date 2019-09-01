import React from 'react';
import { formatTimeDistance } from '../utils';
import { CompanyTd as StyledTd, CompanyTr as StyledTr } from './styled';

export default function Company({ company, isEven }) {
    const goto = url => window.open(url, '_blank');
    const firstInq = formatTimeDistance(company.first_inq_on);
    const lastInq =
        company.last_inq_on && formatTimeDistance(company.last_inq_on);

    return (
        <StyledTr isEven={isEven}>
            <StyledTd width="170px">{company.company_name}</StyledTd>
            <StyledTd width="170px">{company.intermediary}</StyledTd>
            <StyledTd width="80px" onClick={() => goto(company.link)}>
                {company.source}
            </StyledTd>
            <StyledTd width="80px">{company.stage}</StyledTd>
            <StyledTd width="230px">{company.note}</StyledTd>
            <StyledTd width="120px">{firstInq}</StyledTd>
            <StyledTd width="120px">{lastInq}</StyledTd>
            <StyledTd>{company.stage_inq_count}</StyledTd>
        </StyledTr>
    );
}
