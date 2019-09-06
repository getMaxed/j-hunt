import styled from 'styled-components';

export const Td = styled.td`
    border: 1px solid #000;
    padding-left: 3px;
    max-width: ${props => props.width};
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
`;

export const Tr = styled.tr`
    background-color: ${props => (props.isEven ? '' : '#f2f2f2')};
`;
