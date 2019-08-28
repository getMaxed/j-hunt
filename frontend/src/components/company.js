import React from 'react';
import companyForm from './companyForm';

export default function Company({ company }) {
    return (
        <tr>
            <td>{company.company_name}</td>
            <td>{company.intermediary}</td>
            <td>{company.source}</td>
            <td>{company.stage}</td>
            <td>{company.stage_inq_count}</td>
            <td>{company.note}</td>
            <td>{company.first_inq_on}</td>
            <td>{company.last_inq_on}</td>
        </tr>
    );
}
