const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
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

  let gameBoard = initialGameBoard;
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
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
