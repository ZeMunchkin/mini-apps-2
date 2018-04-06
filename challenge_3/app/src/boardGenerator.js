class Square {
  constructor() {
    this.value = '';
    this.clicked = false;
  }
}

const boardMapper = (height, width) => {
  const board = [];
  for (let i = 0; i < height; i += 1) {
    board[i] = [];
    for (let j = 0; j < width; j += 1) {
      const row = board[i];
      row[j] = new Square();
    }
  }
  return board;
};

const updateSquareValue = (board, row, col) => {
  const square = board[row][col];
  let numBombs = 0;

  if (square.value === '') {
    const changes = [-1, 0, 1];
    for (let i = 0; i < changes.length; i += 1) {
      const curRow = row + changes[i];
      if (board[curRow]) {
        for (let j = 0; j < changes.length; j += 1) {
          const curCol = col + changes[j];
          const borderSquare = board[curRow][curCol];
          if (borderSquare && borderSquare.value === 'X') {
            numBombs += 1;
          }
        }
      }
    }
  }

  if (numBombs) {
    square.value = numBombs.toString();
  }
};

const boardGenerator = (height, width, numBombs) => {
  const board = boardMapper(height, width);
  let bombsRemaining = numBombs;

  while (bombsRemaining > 0) {
    const row = Math.floor(Math.random() * height);
    const col = Math.floor(Math.random() * width);

    const square = board[row][col];
    if (!square.value) {
      square.value = 'X';
      bombsRemaining -= 1;
    }
  }

  for (let i = 0; i < height; i += 1) {
    for (let j = 0; j < width; j += 1) {
      updateSquareValue(board, i, j);
    }
  }

  return board;
};

export default boardGenerator;

