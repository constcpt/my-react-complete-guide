import { useState } from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

let winner, hasDraw;

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
  const gameBoard = initialGameBoard.map((row) => [...row]); // immutability really matters here, we need to keep the original gameBoard unchanged, for reset purpose
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
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  const [gameTurns, setGameTurns] = useState([]);
  // const [hasWinner, setHasWinner] = useState(false); // redundant state, we can compute it from gameTurns
  const activePlayer = getActivePlayer(gameTurns);
  const gameBoard = getGameBoard(gameTurns);
  winner = checkWinner(gameBoard);
  hasDraw = gameTurns.length === 9 && !winner;

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

  function handleReStartClick() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(playerSymbol, newName) {
    setPlayers((prevPlayers) => {
      return { ...prevPlayers, [playerSymbol]: newName }; // [playerSymbol] is Computed propertires, just a normal JS syntax, https://javascript.info/object#computed-properties
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
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver
            winner={players[winner]} // square brackets notation provide a way to obtain the value of a variable as the key name of an object, https://javascript.info/object#square-brackets
            onReStart={handleReStartClick}
          />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
