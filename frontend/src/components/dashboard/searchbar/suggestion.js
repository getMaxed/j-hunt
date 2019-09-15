import React from 'react';

export default function Suggestion({
    isFailed,
    companyName,
    intermName,
    details
}) {
    const [isDetailsShown, setIsDetaisShown] = React.useState(false);
    const showDetails = () => setIsDetaisShown(s => !s);

    const { source, note, first_inq_on, failed_on } = details;

    const color = isFailed ? 'red' : '';
    const typeColor = isFailed ? '#ffb7b7' : 'grey';

    return (
        <li
            style={{ color }}
            onClick={isFailed ? () => showDetails() : undefined}
        >
            {companyName ? (
                <span>
                    <i
                        style={{
                            color: typeColor
                        }}
                    >
                        company:{' '}
                    </i>
                    {companyName}
                </span>
            ) : (
                ''
            )}
            {companyName && intermName && <span>, &nbsp;</span>}
            {intermName ? (
                <span>
                    <i
                        style={{
                            color: typeColor
                        }}
                    >
                        interm:{' '}
                    </i>
                    {intermName}
                </span>
            ) : (
                ''
            )}
            {isDetailsShown && (
                <>
                    <br />
                    SOURCE: <span style={{ color: typeColor }}>{source}</span>
                    <br />
                    NOTE: <span style={{ color: typeColor }}>{note}</span>
                    <br />
                    FIRST INQUIRY:&nbsp;
                    <span style={{ color: typeColor }}>{first_inq_on}</span>
                    <br />
                    FAILED:&nbsp;
                    <span style={{ color: typeColor }}>{failed_on}</span>
                    <hr />
                </>
            )}
        </li>
    );
}
