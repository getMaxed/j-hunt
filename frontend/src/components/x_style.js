import styled from 'styled-components';

export const Alert = styled.div`
    color: ${props => props.color};
    position: fixed;
    left: 250px;
    font-weight: bold;
    font-size: 18px;
`;
