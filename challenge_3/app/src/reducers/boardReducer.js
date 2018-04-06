import boardGenerator from '../boardGenerator';
import copyBoard from '../reduxHelper';


const boardReducer = (board, action) => {
  const update = () => {
    const newBoard = copyBoard(board);
    const square = newBoard[action.row][action.col];
    square.clicked = true;
    return newBoard;
  };

  switch (action.type) {
    case 'UPDATE_BOARD':
      return update();
    default:
      return board || boardGenerator(10, 10, 10);
  }
};

export default boardReducer;
