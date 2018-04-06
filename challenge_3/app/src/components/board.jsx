import React from 'react';
import propTypes from 'proptypes';
import './board.css';
import SquareContainer from '../containers/squareContainer';

const Board = (props) => {

  return (
    <div id="boardContainer">
      {props.board.map((row, i) => (
        <div id={`row${i}`} className="rows" key={`row${i}`}>
          {(row.map((obj, j) => (
            (<SquareContainer row={i} col={j} key={`row${i}col${j}`} />)
          )))}
        </div>
      ))}
    </div>
  );
};

export default Board;

Board.propTypes = {
  board: propTypes.arrayOf(propTypes.array).isRequired,
};
