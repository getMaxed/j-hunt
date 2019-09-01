import React from 'react';
import { connect } from 'react-redux';
import {
    setAddingCompany,
    addCompany,
    updateCompany
} from '../actions/company';
import { openModal, closeModal } from '../actions/modal';
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
    updateCompany,
    isModalOpen,
    openModal,
    closeModal,
    modalType,
    modalTarget,
    modalValue
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
                                openModal={openModal}
                            />
                        ))}
                    </tbody>
                </StyledTable>
            )}
            {isModalOpen && (
                <Modal
                    closeModal={closeModal}
                    updateCompany={updateCompany}
                    type={modalType}
                    target={modalTarget}
                    value={modalValue}
                />
            )}
        </>
    );
};

const mapStateToProps = state => ({
    activeCompanies: state.company.active,
    failedCompanies: state.company.failed,
    addingCompany: state.company.adding,
    isModalOpen: state.modal.isOpen,
    modalType: state.modal.type,
    modalTarget: state.modal.target,
    modalValue: state.modal.value
});

export default connect(
    mapStateToProps,
    { setAddingCompany, addCompany, openModal, closeModal, updateCompany }
)(Dashboard);
