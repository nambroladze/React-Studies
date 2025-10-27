import Player from "./components/Player";

function App() {
  const diceEmojis = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        margin: 0,
      }}
    >
      <h1>2-Player Dice Game</h1>

      <div>
        <Player title={"Player 1"} />

        <div>VS</div>

        <Player title={"Player 2"} />
      </div>
    </div>
  );
}

export default App;
