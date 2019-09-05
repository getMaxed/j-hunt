import React from 'react';

export default function CompanyForm({
    addingCompany,
    addCompany,
    setAddingCompany
}) {
    const { name, isIntermediary } = addingCompany;
    const emptyInput = {
        company_name: isIntermediary ? '' : name,
        intermediary: isIntermediary ? name : '',
        link: '',
        source: '',
        stage: 'applied',
        stage_inq_count: 0,
        note: '',
        first_inq_on: '',
        last_inq_on: ''
    };
    const [inputData, setInputData] = React.useState(emptyInput);
    const d = inputData; // reference (for readability)

    function handleInputChange(e) {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    }

    function handleSelectChange(e, type) {
        setInputData({ ...inputData, [type]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        addCompany(inputData);
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <label htmlFor="company_name">Company</label> <br />
            <input
                type="text"
                name="company_name"
                id="company_name"
                value={d.company_name}
                onChange={e => handleInputChange(e)}
            />
            <br /> <br />
            <label htmlFor="intermediary">Intermediary</label> <br />
            <input
                type="text"
                name="intermediary"
                id="intermediary"
                value={d.intermediary}
                onChange={e => handleInputChange(e)}
            />
            <br /> <br />
            <label htmlFor="link">Link</label> <br />
            <input
                type="text"
                name="link"
                id="link"
                value={d.link}
                onChange={e => handleInputChange(e)}
            />
            <br /> <br />
            <label htmlFor="source">Source</label> <br />
            <input
                type="text"
                name="source"
                id="source"
                value={d.source}
                list="sources"
                onChange={e => handleInputChange(e)}
            />
            <datalist id="sources">
                <option value="indeed" />
                <option value="linkedin" />
                <option value="angel" />
                <option value="monster" />
                <option value="glassdoor" />
            </datalist>
            <br /> <br />
            <label htmlFor="stage">Stage</label> <br />
            <select
                id="stage"
                value={d.stage}
                onChange={e => handleSelectChange(e, 'stage')}
            >
                <option name="applied" value="applied">
                    Applied
                </option>
                <option name="screened" value="screened">
                    Screened
                </option>
                <option name="interviewed" value="interviewed">
                    Interviewed
                </option>
                <option name="second_interviewed" value="second_interviewed">
                    Second Interiewed
                </option>
                <option name="failed" value="failed">
                    Failed
                </option>
            </select>
            <br /> <br />
            <label htmlFor="stage_inq_count">
                Current Stage's Inquiry Number
            </label>{' '}
            <br />
            <select
                id="stage_inq_count"
                value={d.stage_inq_count}
                onChange={e => handleSelectChange(e, 'stage_inq_count')}
            >
                <option name="0" value="0">
                    0
                </option>
                <option name="1" value="1">
                    1
                </option>
                <option name="2" value="2">
                    2
                </option>
                <option name="3" value="3">
                    3
                </option>
            </select>
            <br /> <br />
            <label htmlFor="note">Note</label> <br />
            <textarea
                name="note"
                id="note"
                cols="30"
                rows="10"
                value={d.note}
                onChange={e => handleInputChange(e)}
            ></textarea>
            <br /> <br />
            <label htmlFor="first_inq_on">First Inquiry</label> <br />
            <input
                type="text"
                name="first_inq_on"
                id="first_inq_on"
                value={d.first_inq_on}
                onChange={e => handleInputChange(e)}
            />
            <br /> <br />
            <label htmlFor="last_inq_on">Last Inquiry</label> <br />
            <input
                type="text"
                name="last_inq_on"
                id="last_inq_on"
                value={d.last_inq_on}
                onChange={e => handleInputChange(e)}
            />
            <br /> <br />
            <input type="submit" value="Submit" />
            <button onClick={() => setAddingCompany(null)}>Cancel</button>
        </form>
    );
}
