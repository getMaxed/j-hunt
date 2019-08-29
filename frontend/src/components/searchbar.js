import React, { useState } from 'react';

const companyList = [
    {
        name: 'facebook',
        isIntermediary: false
    },
    {
        name: 'google',
        isIntermediary: false
    },
    {
        name: 'talentsearch',
        isIntermediary: true
    },
    {
        name: 'talented',
        isIntermediary: true
    },
    {
        name: 'talio',
        isIntermediary: true
    }
];

export default function SearchBar({
    setAddingCompany,
    activeCompanies,
    failedCompanies
}) {
    const [name, setName] = useState('');
    const [isIntermediary, setIsIntermediary] = useState(false);
    const [savedCompanies, setSavedCompanies] = useState([]);

    function handleInputChange(e) {
        setName(e.target.value);
        const companies = companyList.filter(c => c.name.indexOf(name) >= 0);
        setSavedCompanies(companies);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const company = name ? { name, isIntermediary } : false;
        setAddingCompany(company);
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <label htmlFor="name">Enter Company Name</label>
            <br />
            <input
                type="text"
                id="name"
                value={name}
                onChange={e => handleInputChange(e)}
            />
            {savedCompanies.length > 0 && name && (
                <ul>
                    {savedCompanies.map(c => (
                        <li style={{ listStyle: 'none' }} key={Math.random()}>
                            {c.name}
                        </li>
                    ))}
                </ul>
            )}
            <br />
            <label htmlFor="intermediary">Check if intermediary</label>
            <input
                type="checkbox"
                id="intermediary"
                name="vehicle1"
                value="Bike"
                onChange={e => setIsIntermediary(e.target.checked)}
            />
            <br />
            <input type="submit" value="Submit" style={{ marginTop: '5px' }} />
        </form>
    );
}
