import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({ turn }) => ({ turn });

const mapDispatchToProps = () => ({});

const TurnDisplayContainer = connect(mapStateToProps, mapDispatchToProps)(({ turn }) =>
    <span>It's {turn}'s turn</span>
);

export default TurnDisplayContainer;
