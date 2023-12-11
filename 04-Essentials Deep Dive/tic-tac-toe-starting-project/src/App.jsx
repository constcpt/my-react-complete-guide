import { useState } from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/Gameboard.jsx";
function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare() {
    setActivePlayer((activePlayer) => (activePlayer === "X" ? "O" : "X"));
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
        <GameBoard
          activePlayerSymbol={activePlayer}
          onSelectSquare={handleSelectSquare}
        />
      </div>
    </main>
  );
}

export default App;
