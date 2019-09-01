import React from 'react';
import { connect } from 'react-redux';
import { setAddingCompany, addCompany } from '../actions/company';
import { openModal } from '../actions/modal';
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
    isModalOpen,
    openModal
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
                    <tbody onClick={e => console.log(e.target.name)}>
                        {activeCompanies.map((c, i) => (
                            <Company
                                key={Math.random()}
                                company={c}
                                isEven={i % 2 === 0}
                                name="name"
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
    { setAddingCompany, addCompany, openModal }
)(Dashboard);
