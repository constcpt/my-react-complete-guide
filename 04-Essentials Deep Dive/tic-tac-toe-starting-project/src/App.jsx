import Player from "./components/Player.jsx";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          {/* totally different isolated instances are created which only use the same logic but they then use it on their own. */}
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>
        Game board
      </div>
    </main>
  );
}

export default App;
