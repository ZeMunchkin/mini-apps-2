// import React from 'react';
import { connect } from 'react-redux';
import Board from '../components/board.jsx';

const mapStateToProps = state => ({
  board: state,
});

const mapDispatchToProps = () => ({});

const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board);

export default BoardContainer;
