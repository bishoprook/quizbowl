import React from 'react';
import { connect } from 'react-redux';
import { clear } from '../actions';

const mapDispatchToProps = dispatch => ({
    clear: () => dispatch(clear())
});

const Clear = connect(null, mapDispatchToProps)(({ clear }) =>
    <button onClick={clear}>Clear</button>
);

export default Clear;
