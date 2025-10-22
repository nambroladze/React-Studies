import { useState } from "react";
import DiceButton from "./components/DiceButton";

function App() {
  const [player1Dice, setPlayer1Dice] = useState(1);
  const [player2Dice, setPlayer2Dice] = useState(1);
  const [currentPlayer, setCurrentPlayer] = useState(1);

  const diceEmojis = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    if (currentPlayer === 1) {
      setPlayer1Dice(randomNumber);
      setCurrentPlayer(2);
    } else {
      setPlayer2Dice(randomNumber);
      setCurrentPlayer(1);
    }
  };

  const resetGame = () => {
    setPlayer1Dice(1);
    setPlayer2Dice(1);
    setCurrentPlayer(1);
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        margin: 0,
      }}
    >
      <h1>🎲 2-Player Dice Game 🎲</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "30px 0",
        }}
      >
        <div>
          <h3>Player 1</h3>
          <div style={{ fontSize: "60px" }}>{diceEmojis[player1Dice - 1]}</div>
          <p>{player1Dice}</p>
        </div>

        <div
          style={{
            fontSize: "40px",
          }}
        >
          VS
        </div>

        <div>
          <h3>Player 2</h3>
          <div style={{ fontSize: "60px" }}>{diceEmojis[player2Dice - 1]}</div>
          <p>{player2Dice}</p>
        </div>
      </div>

      <p style={{ fontSize: "20px", margin: "20px 0" }}>
        {currentPlayer === 1 ? "Player 1's turn!" : "Player 2's turn!"}
      </p>

      <DiceButton onClick={rollDice} />
      <DiceButton text="🔄 Reset" onClick={resetGame} />
    </div>
  );
}

export default App;
