import { useState } from "react";
import Player from "./components/Player";
import WinnerBanner from "./components/WinnerBanner";

function App() {
  const [player1Dice, setPlayer1Dice] = useState(null);
  const [player2Dice, setPlayer2Dice] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [winner, setWinner] = useState(null);

  const playAgain = () => {
    setPlayer1Dice(null);
    setPlayer2Dice(null);
    setCurrentPlayer(1);
    setWinner(null);
  };

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    if (currentPlayer === 1) {
      setPlayer1Dice(randomNumber);
      setCurrentPlayer(2);
    } else {
      setPlayer2Dice(randomNumber);
      determineWinner(randomNumber);
    }
  };

  const determineWinner = (player2Roll) => {
    if (player1Dice > player2Roll) {
      setWinner("Player 1");
    } else if (player2Roll > player1Dice) {
      setWinner("Player 2");
    } else {
      setWinner("tie");
    }
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
      <p style={{ fontSize: "20px", margin: "20px 0" }}>
        {currentPlayer === 1 ? "Player 1's turn!" : "Player 2's turn!"}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "30px 0",
        }}
      >
        <Player
          title={"Player 1"}
          onClick={rollDice}
          text={"🎲 Roll Dice"}
          disabled={currentPlayer !== 1}
        />

        <div
          style={{
            fontSize: "40px",
          }}
        >
          VS
        </div>

        <Player
          title={"Player 2"}
          onClick={rollDice}
          text={"🎲 Roll Dice"}
          disabled={currentPlayer !== 2}
        />
      </div>
      <WinnerBanner
        winner={winner}
        player1Dice={player1Dice}
        player2Dice={player2Dice}
        onPlayAgain={playAgain}
      />
    </div>
  );
}

export default App;
