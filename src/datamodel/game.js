// Function to calculate the winner of the tic-tac-toe game
export function calculateWinner(squares) {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6],            // Diagonals
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

// Function to create an initial game state
export function createInitialState() {
    return {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
}

// Function to make a move
export function makeMove(squares, index, xIsNext) {
    if (squares[index] || calculateWinner(squares)) {
      // If the square is already taken or if the game is won, return the current squares
      return squares;
    }

    // Place 'X' or 'O' in the correct square
    const newSquares = squares.slice();
    newSquares[index] = xIsNext ? 'X' : 'O';
    return newSquares;
}