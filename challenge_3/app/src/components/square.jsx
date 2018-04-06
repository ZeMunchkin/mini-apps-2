import React from 'react';
import propTypes from 'proptypes';
import './square.css';

const Square = (props) => {
  const curSquare = props.board[props.row][props.col];

  return (
    <div className="square" onClick={() => props.handleClick(props.row, props.col)}>
      {curSquare.clicked ? curSquare.value : null}
    </div>
  );
};

export default Square;

Square.propTypes = {
  board: propTypes.arrayOf(propTypes.array).isRequired,
  row: propTypes.number.isRequired,
  col: propTypes.number.isRequired,
  handleClick: propTypes.func.isRequired,
};
