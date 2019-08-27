import React, { useState } from 'react';

const companyList = ['asdf', 'qwer', 'zxcv'];
const intermediaryList = ['asd', 'qwe', 'zxc'];

export default function SearchBar({ setNewCompany }) {
    const [inputData, setInputData] = useState('');
    function handleSubmit(e) {
        e.preventDefault();

        const company = {};
        if (companyList.includes(inputData)) {
            company.name = inputData;
            company.isCompany = true;
        }
        if (intermediaryList.includes(inputData)) {
            company.name = inputData;
            company.isCompany = false;
        }
        setNewCompany(company);
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <label htmlFor="name">Enter Company/Intermediary name</label> <br />
            <input
                type="text"
                id="name"
                value={inputData}
                onChange={e => setInputData(e.target.value)}
            />
            <br /> <br />
            <input type="submit" value="Submit" />
        </form>
    );
}
