import React, { useState } from 'react';

export default function CompanyForm() {
    const emptyInput = {
        company_name: '',
        intermediary: '',
        link_or_desc: '',
        source: '',
        stage: 'applied',
        stage_inq_count: 0,
        note: '',
        first_inq_on: '',
        last_inq_on: ''
    };
    const [needJobForm, setNeedJob] = useState(true);
    const [enterLinkNotDesc, setEnterLinkNotDesc] = useState(true);
    const [inputData, setInputData] = useState(emptyInput);
    const {
        company_name,
        intermediary,
        link_or_desc,
        source,
        stage,
        stage_inq_count,
        note,
        first_inq_on,
        last_inq_on
    } = inputData;

    function handleInputChange(e) {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    }

    function handleSelectChange(e, type) {
        setInputData({ ...inputData, [type]: e.target.value });
    }

    function handlePageChange(e, link) {
        e.preventDefault();
        setEnterLinkNotDesc(link);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(inputData);
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <label htmlFor="company_name">Company Name</label> <br />
            <input
                type="text"
                name="company_name"
                id="company_name"
                value={company_name}
                onChange={e => handleInputChange(e)}
            />
            <br /> <br />
            {needJobForm && (
                <>
                    <label htmlFor="intermediary">
                        Intermediaries Involved
                    </label>{' '}
                    <br />
                    <input
                        type="text"
                        name="intermediary"
                        id="intermediary"
                        value={intermediary}
                        onChange={e => handleInputChange(e)}
                    />
                    <br /> <br />
                    <label htmlFor="link_or_desc">
                        <a href="" onClick={e => handlePageChange(e, true)}>
                            Link
                        </a>
                        &nbsp;or&nbsp;
                        <a href="" onClick={e => handlePageChange(e, false)}>
                            Description
                        </a>
                    </label>{' '}
                    <br />
                    {enterLinkNotDesc ? (
                        <input
                            type="text"
                            name="link_or_desc"
                            id="link_or_desc"
                            value={link_or_desc}
                            onChange={e => handleInputChange(e)}
                        />
                    ) : (
                        <textarea
                            name="note"
                            id="note"
                            cols="30"
                            rows="10"
                            value={link_or_desc}
                            onChange={e => handleInputChange(e)}
                        ></textarea>
                    )}
                    <br /> <br />
                    <label htmlFor="source">Source</label> <br />
                    <input
                        type="text"
                        name="source"
                        id="source"
                        value={source}
                        onChange={e => handleInputChange(e)}
                    />
                    <br /> <br />
                    <label htmlFor="stage">Stage</label> <br />
                    <select
                        id="stage"
                        value={stage}
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
                        <option
                            name="second_interviewed"
                            value="second_interviewed"
                        >
                            Second Interiewed
                        </option>
                    </select>
                    <br /> <br />
                    <label htmlFor="stage_inq_count">
                        Current Stage's Inquiry Number
                    </label>{' '}
                    <br />
                    <select
                        id="stage_inq_count"
                        value={stage_inq_count}
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
                        value={note}
                        onChange={e => handleInputChange(e)}
                    ></textarea>
                    <br /> <br />
                    <label htmlFor="first_inq_on">First Inquiry On</label>{' '}
                    <br />
                    <input
                        type="text"
                        name="first_inq_on"
                        id="first_inq_on"
                        value={first_inq_on}
                        onChange={e => handleInputChange(e)}
                    />
                    <br /> <br />
                    <label htmlFor="last_inq_on">Last Inquiry On</label> <br />
                    <input
                        type="text"
                        name="last_inq_on"
                        id="last_inq_on"
                        value={last_inq_on}
                        onChange={e => handleInputChange(e)}
                    />
                    <br /> <br />
                </>
            )}
            <input type="submit" value="Submit" />
        </form>
    );
}