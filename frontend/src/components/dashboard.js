import React, { useState } from 'react';
import CompanyForm from './companyForm';
import SearchBar from './searchbar';
import Companies from './companies';

export default function Dashboard() {
    const [newCompany, setNewCompany] = useState({});
    console.log(newCompany);
    console.log(Object.keys(newCompany).length);
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
