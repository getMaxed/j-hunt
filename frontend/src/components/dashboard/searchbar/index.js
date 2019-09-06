import React from 'react';
import { slugify, formatTimeDistance as time } from '../../../utils';
import Suggestion from './suggestion';
import { Ul } from './x_style';

export default function SearchBar({
    setAddingCompany,
    activeCompanies: active,
    failedCompanies: failed
}) {
    const [name, setName] = React.useState('');
    const [isIntermediary, setIsIntermediary] = React.useState(false);
    const [activeCompanies, setActiveCompanies] = React.useState([]);
    const [failedCompanies, setFailedCompanies] = React.useState([]);
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
                {companies[+isFailed].map(c => {
                    const details = {};
                    if (isFailed) {
                        details.source = c.source;
                        details.note = c.note;
                        details.failed_on = time(c.failed_on);
                        details.first_inq_on = time(c.first_inq_on);
                    }

                    return (
                        <Suggestion
                            key={Math.random()}
                            isFailed={isFailed}
                            companyName={c.company_name}
                            intermName={c.intermediary}
                            details={details}
                        />
                    );
                })}
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
                <Ul>
                    {suggestActive && renderCompanies()}
                    {suggestFailed && renderCompanies(true)}
                </Ul>
            )}
            <br />
            <label htmlFor="intermediary">Check if intermediary</label>
            <input
                type="checkbox"
                id="intermediary"
                onChange={e => setIsIntermediary(e.target.checked)}
            />
            <br />
            <input type="submit" value="Submit" style={{ marginTop: '5px' }} />
        </form>
    );
}
