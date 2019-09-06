import React from 'react';
import { connect } from 'react-redux';
import {
    setAddingCompany,
    addCompany,
    updateCompany
} from '../../actions/company';
import { openModal, closeModal } from '../../actions/modal';
import Form from './company/add';
import Company from './company/';
import Modal from './../modal/';
import SearchBar from './searchbar/';
import { Table, Th } from './x_style';

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
    modalValue,
    refNote,
    refId
}) => {
    return (
        <>
            {addingCompany ? (
                <Form
                    setAddingCompany={setAddingCompany}
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
                            <Th>Company</Th>
                            <Th>Intermediary</Th>
                            <Th>Source</Th>
                            <Th>Stage</Th>
                            <Th>Note</Th>
                            <Th>First Inquiry</Th>
                            <Th>Latest Inquiry</Th>
                            <Th>Inq</Th>
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
                </Table>
            )}
            {isModalOpen && (
                <Modal
                    closeModal={closeModal}
                    updateCompany={updateCompany}
                    type={modalType}
                    target={modalTarget}
                    value={modalValue}
                    refNote={refNote}
                    refId={refId}
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
    modalValue: state.modal.value,
    refNote: state.modal.refNote,
    refId: state.modal.refId
});

export default connect(
    mapStateToProps,
    { setAddingCompany, addCompany, openModal, closeModal, updateCompany }
)(Dashboard);
