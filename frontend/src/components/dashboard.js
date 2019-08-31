import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setAddingCompany, addCompany } from '../actions/company';
import CompanyForm from './companyForm';
import Company from './company';
import Modal from './modal';
import SearchBar from './searchbar';

const Table = styled.table`
    margin-top: 12px;
    border-collapse: collapse;
    /* width: 100%; */
    /* table-layout: fixed; */
`;

const THead = styled.th`
    text-align: left;
`;

const Dashboard = ({
    activeCompanies,
    failedCompanies,
    addingCompany,
    setAddingCompany,
    addCompany,
    isModalOpen
}) => {
    return (
        <>
            {addingCompany ? (
                <CompanyForm
                    addingCompany={addingCompany}
                    addCompany={addCompany}
                />
            ) : (
                <SearchBar
                    setAddingCompany={setAddingCompany}
                    activeCompanies={activeCompanies}
                    failedCompanies={failedCompanies}
                />
            )}
            {!addingCompany && activeCompanies.length > 0 && (
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
                        {activeCompanies.map((c, i) => (
                            <Company
                                key={Math.random()}
                                company={c}
                                isEven={i % 2 === 0}
                            />
                        ))}
                    </tbody>
                </Table>
            )}
            {isModalOpen && <Modal />}
        </>
    );
};

const mapStateToProps = state => ({
    activeCompanies: state.company.active,
    failedCompanies: state.company.failed,
    addingCompany: state.company.adding,
    isModalOpen: state.modal.isOpen
});

export default connect(
    mapStateToProps,
    { setAddingCompany, addCompany }
)(Dashboard);
