import React, { useState } from 'react';
import styled from 'styled-components';
import { slugify } from '../utils';

const SuggList = styled.ul`
    list-style: 'none';
    padding: 0;
    margin-top: 10px;
    margin-bottom: 0;
`;

const Suggestion = styled.li`
    list-style: 'none';
    color: ${props => (props.isFailed ? 'red' : '')};
`;

export default function SearchBar({
    setAddingCompany,
    activeCompanies: active,
    failedCompanies: failed
}) {
    const [name, setName] = useState('');
    const [isIntermediary, setIsIntermediary] = useState(false);
    const [activeCompanies, setActiveCompanies] = useState([]);
    const [failedCompanies, setFailedCompanies] = useState([]);
    const suggestActive = activeCompanies.length > 0 && name.length > 2;
    const suggestFailed = failedCompanies.length > 0 && name.length > 2;
    const suggestions =
        name && (activeCompanies.length > 0 || failedCompanies.length > 0);

    function handleInputChange(e) {
        setName(e.target.value);
        setActiveCompanies(findMatching(active));
        setFailedCompanies(findMatching(failed));

        function findMatching(arr) {
            return arr.filter(
                c =>
                    c.company_name_slug.indexOf(slugify(name)) >= 0 ||
                    c.intermediary_slug.indexOf(slugify(name)) >= 0
            );
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        const company = name ? { name, isIntermediary } : false;
        setAddingCompany(company);
    }

    function renderCompanies(isFailed = false) {
        const companies = [activeCompanies, failedCompanies];
        return (
            <>
                {companies[+isFailed].map(c => (
                    <Suggestion key={Math.random()} isFailed={isFailed}>
                        {c.company_name ? `(C): ${c.company_name};` : ''}
                        &nbsp;
                        {c.intermediary ? `(i): ${c.intermediary}` : ''}
                    </Suggestion>
                ))}
            </>
        );
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
            {suggestions && (
                <SuggList>
                    {suggestActive && renderCompanies()}
                    {suggestFailed && renderCompanies(true)}
                </SuggList>
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
