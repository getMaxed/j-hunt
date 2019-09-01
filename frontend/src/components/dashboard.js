import React from 'react';
import { connect } from 'react-redux';
import { setAddingCompany, addCompany } from '../actions/company';
import CompanyForm from './companyForm';
import Company from './company';
import Modal from './modal';
import SearchBar from './searchbar';
import {
    DashboardTable as StyledTable,
    DashboardTh as StyledTh
} from './styled';

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
                <StyledTable>
                    <thead>
                        <tr>
                            <StyledTh>Company</StyledTh>
                            <StyledTh>Intermediary</StyledTh>
                            <StyledTh>Source</StyledTh>
                            <StyledTh>Stage</StyledTh>
                            <StyledTh>Note</StyledTh>
                            <StyledTh>First Inquiry</StyledTh>
                            <StyledTh>Latest Inquiry</StyledTh>
                            <StyledTh>Inq</StyledTh>
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
                </StyledTable>
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
