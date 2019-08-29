import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import CompanyForm from './companyForm';
import Company from './company';
import SearchBar from './searchbar';

const Table = styled.table`
    margin-top: 12px;
    border-collapse: collapse;
`;

const THead = styled.th`
    text-align: left;
`;

const Dashboard = ({ companies }) => {
    const [newCompany, setNewCompany] = useState({});
    const addingCompany = Object.keys(newCompany).length;
    const companyAdded = company => setNewCompany(company);
    console.log(addingCompany);
    return (
        <>
            {addingCompany ? (
                <CompanyForm
                    company={newCompany}
                    setNewCompany={setNewCompany}
                />
            ) : (
                <SearchBar companyAdded={companyAdded} />
            )}
            {!addingCompany && companies.length > 0 && (
                <Table>
                    <thead>
                        <tr>
                            <THead>Company</THead>
                            <THead>Intermediary</THead>
                            <THead>Source</THead>
                            <THead>Stage</THead>
                            <THead>Note</THead>
                            <THead>First Inquiry</THead>
                            <THead>Latest Inquiry</THead>
                            <THead>Inq</THead>
                        </tr>
                    </thead>
                    <tbody>
                        {companies.map((c, i) => (
                            <Company
                                key={Math.random()}
                                company={c}
                                isEven={i % 2 === 0}
                            />
                        ))}
                    </tbody>
                </Table>
            )}
        </>
    );
};

const mapStateToProps = state => ({
    companies: state.company.list
});

export default connect(mapStateToProps)(Dashboard);
