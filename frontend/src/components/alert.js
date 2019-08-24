import React, { useState } from 'react';
import { login, register } from '../actions/auth';
import { connect } from 'react-redux';

function Alert({ type, msg }) {
    const color = type => {
        if (type === `success`) {
            return `green`;
        }
        if (type === `error`) {
            return `red`;
        }
        if (type === `info`) {
            return `orange`;
        }
    };
    return <div style={{ color: color(type) }}>{msg}</div>;
}

const mapStateToProps = state => ({
    type: state.alert.type,
    msg: state.alert.msg
});

export default connect(mapStateToProps)(Alert);
