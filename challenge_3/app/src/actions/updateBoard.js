const updateBoard = (row, col) => {
  console.log('update board ACTION invoked');
  return {
    type: 'UPDATE_BOARD',
    row,
    col,
  };
};

module.exports = updateBoard;
