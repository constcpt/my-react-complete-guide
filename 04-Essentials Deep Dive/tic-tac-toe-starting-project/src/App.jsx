import { useState } from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

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
  const gameBoard = INITIAL_GAME_BOARD.map((row) => [...row]); // immutability really matters here, we need to keep the original gameBoard unchanged, for reset purpose
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}

// get winner name function
function getWinner(gameBoard, players) {
  let winner;

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
      winner = players[firstSquareSymbol]; // square brackets notation provide a way to obtain the value of a variable as the key name of an object, https://javascript.info/object#square-brackets
    }
  }
  return winner; // either name of the winner or undefined
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = getActivePlayer(gameTurns);
  const gameBoard = getGameBoard(gameTurns);
  const winner = getWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

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
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onReStart={handleReStartClick} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
