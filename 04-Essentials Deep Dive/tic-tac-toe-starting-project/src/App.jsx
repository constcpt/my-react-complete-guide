import Player from "./components/Player.jsx";
import GameBoard from "./components/Gameboard.jsx";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          {/* totally different isolated instances are created which only use the same logic but they then use it on their own. */}
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
