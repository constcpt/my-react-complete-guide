import { useState } from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/Gameboard.jsx";
import Log from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

let winner;

// get active player function
function getActivePlayer(turns) {
  let activePlayer = "X";
  if (turns.length > 0 && turns[0].player === "X") {
    activePlayer = "O";
  }
  return activePlayer;
}

// get gameboard function
function getGameBoard(turns) {
  const gameBoard = initialGameBoard;
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}

// check winner function
function checkWinner(gameBoard) {
  for (const winCombination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[winCombination[0].row][winCombination[0].column];
    const secondSquareSymbol =
      gameBoard[winCombination[1].row][winCombination[1].column];
    const thirdSquareSymbol =
      gameBoard[winCombination[2].row][winCombination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      return firstSquareSymbol;
    }
  }
  return null;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [hasWinner, setHasWinner] = useState(false); // redundant state, we can compute it from gameTurns
  const activePlayer = getActivePlayer(gameTurns);
  const gameBoard = getGameBoard(gameTurns);
  winner = checkWinner(gameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((preTurns) => {
      const currentPlayer = getActivePlayer(preTurns);
      const updatedTurns = [
        // { square: { row: rowIndex, col: colIndex }, player: activePlayer }, // use another state value activePlayer is not optimal, not recommended, we can get the activePlayerSymbol from computing, avoiding uncessary state management
        {
          square: { row: rowIndex, col: colIndex },
          player: currentPlayer,
        },
        ...preTurns,
      ];
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          {/* totally different isolated instances are created which only use the same logic but they then use it on their own. */}
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        {winner && <p className="winner">{winner} won!</p>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
