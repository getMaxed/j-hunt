import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login, register } from '../actions/auth';

const Alert = ({ type, msg }) => {
    const color = type => {
        if (type === `success`) {
            return `green`;
        }
        if (type === `failure`) {
            return `red`;
        }
        if (type === `info`) {
            return `grey`;
        }
    };
    return (
        <div style={{ color: color(type), position: 'fixed', left: '250px' }}>
            {msg}
        </div>
    );
};

const mapStateToProps = state => ({
    type: state.alert.type,
    msg: state.alert.msg
});

export default connect(mapStateToProps)(Alert);
