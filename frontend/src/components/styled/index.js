import styled from 'styled-components';

export const Alert = styled.div`
    color: ${props => props.color};
    position: fixed;
    left: 250px;
    font-weight: bold;
    font-size: 18px;
`;

export const Modal = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 1;
    visibility: visible;
    transform: scale(1.1);
    transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;

    form {
        position: absolute;
        top: 20%;
        left: 30%;
        transform: translate(-50%, -50%);
        background-color: white;
        padding: 1rem 1.5rem;
        width: 24rem;
        border-radius: 0.5rem;
    }
`;

export const SuggestionList = styled.ul`
    list-style: 'none';
    padding: 0;
    margin-top: 10px;
    margin-bottom: 0;
`;

export const Suggestion = styled.li`
    list-style: 'none';
    color: ${props => (props.isFailed ? 'red' : '')};
`;

export const DashboardTable = styled.table`
    margin-top: 12px;
    border-collapse: collapse;
`;

export const DashboardTh = styled.th`
    text-align: left;
`;

export const CompanyTd = styled.td`
    border: 1px solid #000;
    padding-left: 3px;
    max-width: ${props => props.width};
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
`;

export const CompanyTr = styled.tr`
    background-color: ${props => (props.isEven ? '' : '#f2f2f2')};
`;
