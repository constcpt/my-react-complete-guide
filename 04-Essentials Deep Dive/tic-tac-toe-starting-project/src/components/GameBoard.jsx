export default function GameBoard({ onSelectSquare, board }) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     // prevGameBoard[rowIndex][colIndex] = "X"; // React not recommend mutating state directly, instead create a (deep) copy first, and then set the state use that copy
  //     const updatedGameBoard = prevGameBoard.map((row) => [...row]); // one way to deep copy that two-dimensional array
  //     updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedGameBoard;
  //   });
  //   onSelectSquare();
  // }

  // generate the game board from the turns
  // const gameBoard = turns.reduce((gameBoard, turn) => {
  //   const { square, player } = turn;
  //   const { row, col } = square;
  //   const updatedGameBoard = gameBoard.map((row) => [...row]);
  //   updatedGameBoard[row][col] = player;
  //   return updatedGameBoard;
  // }, initialGameBoard);

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
