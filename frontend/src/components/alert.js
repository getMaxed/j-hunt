import React from 'react';
import { connect } from 'react-redux';
import { getAlertColor } from '../utils';
import { Alert as StyledAlert } from './styled';

const Alert = ({ type, msg }) => (
    <StyledAlert color={getAlertColor(type)}>{msg}</StyledAlert>
);

const mapStateToProps = state => ({
    type: state.alert.type,
    msg: state.alert.msg
});

export default connect(mapStateToProps)(Alert);
