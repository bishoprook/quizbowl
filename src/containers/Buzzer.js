import React from 'react';
import { connect } from 'react-redux';
import { buzz } from '../actions';

const mapDispatchToProps = (dispatch, { actor }) => ({
    onClick: () => dispatch(buzz(actor))
});

const Buzzer = connect(null, mapDispatchToProps)(({ onClick, actor }) =>
    <button onClick={onClick}>{actor}</button>
);

export default Buzzer;
