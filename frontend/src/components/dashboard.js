import React, { useState } from 'react';
import CompanyForm from './companyForm';
import SearchBar from './searchbar';
import Companies from './companies';

export default function Dashboard() {
    const [newCompany, setNewCompany] = useState({});
    return (
        <>
            {Object.keys(newCompany).length ? (
                <CompanyForm company={newCompany} />
            ) : (
                <SearchBar setNewCompany={setNewCompany} />
            )}
            <Companies />
        </>
    );
}
