import { useState } from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/Gameboard.jsx";
import Log from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";

function getActivePlayer(turns) {
  let activePlayer = "X";
  if (turns.length > 0 && turns[0].player === "X") {
    activePlayer = "O";
  }
  return activePlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = getActivePlayer(gameTurns);

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
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
