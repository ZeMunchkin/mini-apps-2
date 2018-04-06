// import React from 'react';
import { connect } from 'react-redux';
import Square from '../components/square.jsx';
import updateBoard from '../actions/updateBoard';

const mapStateToProps = (state, ownProps) => {
  return {
    board: state,
  };
};

const mapDispatchToProps = dispatch => ({
  handleClick: (row, col) => dispatch(updateBoard(row, col)),
});

const SquareContainer = connect(mapStateToProps, mapDispatchToProps)(Square);

export default SquareContainer;
