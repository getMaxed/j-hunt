import React, { useState } from 'react';
import { connect } from 'react-redux';
import CompanyForm from './companyForm';
import Company from './company';
import SearchBar from './searchbar';
import Companies from './companies';

const Dashboard = ({ companies }) => {
    const [newCompany, setNewCompany] = useState({});
    const addingCompany = Object.keys(newCompany).length;
    const companyAdded = () => setNewCompany({});
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
                <table
                    style={{ marginTop: `20px`, borderCollapse: `collapse` }}
                >
                    <thead>
                        <tr>
                            <th>Company Name</th>
                            <th>Intermediary</th>
                            <th>Source</th>
                            <th>Stage</th>
                            <th>Inq #</th>
                            <th>Note</th>
                            <th>First Inquiry</th>
                            <th>Latest Inquiry</th>
                        </tr>
                    </thead>
                    <tbody>
                        {companies.map(c => (
                            <Company key={Math.random()} company={c} />
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};

const mapStateToProps = state => ({
    companies: state.company.list
});

export default connect(mapStateToProps)(Dashboard);
