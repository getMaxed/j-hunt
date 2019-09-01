import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../actions/modal';
import { Modal as StyledModal } from './styled';

const Modal = ({ closeModal }) => {
    function handleSubmit(e) {
        e.preventDefault();

        console.log(`submitted`);
    }

    return (
        <>
            <StyledModal>
                <form onSubmit={e => handleSubmit(e)}>
                    <input type="text" name="" id="" />
                    <input type="submit" value="Submit" />
                    <button onClick={() => closeModal()}>Cancel</button>
                </form>
            </StyledModal>
        </>
    );
};

const mapStateToProps = state => ({
    //
});

export default connect(
    mapStateToProps,
    { closeModal }
)(Modal);
