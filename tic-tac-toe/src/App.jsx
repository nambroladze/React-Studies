import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

const deriveActivePlayer = (gameTurns) => {
  return gameTurns.length % 2 === 0 ? "X" : "O";
};

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  console.log(activePlayer);

  function handleSquareSelect(rowIndex, colIndex) {
    // setActivePlayer((prevValue) => (prevValue === "X" ? "O" : "X"));
    // {მოვიფიქროთ როგორ შევინახოთ სვლები და დავლოგოთ კონსოლში}
    // {ვეცადოთ ავარიდოთ თავი state-ების ერთამნეთში არევას}
    // {დავაკრვირდეთ და ავირიდოთ ერიდაიგივე ინფორმაციის შენახვა თავიდან}
    // {Logs component-ში დავლოგოთ სვლები}
    // {GameBoard component-ში დავმატოთ gameTurns პარამეტრი და დავმეპოთ სვლები, მოვაშოროთ ზედმეტი state-ის გამოყენება}

    setGameTurns((prevValue) => {
      let currentPlayer = prevValue.length % 2 === 0 ? "X" : "O";

      const newTurn = {
        square: { rowIndex, colIndex },
        player: currentPlayer,
      };
      return [newTurn, ...prevValue];
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            isActive={activePlayer === "X"}
            initialName="Player 1"
            symbol="X"
          />
          <Player
            isActive={activePlayer === "O"}
            initialName="Player 2"
            symbol="O"
          />
        </ol>
        <GameBoard onSquareSelect={handleSquareSelect} gameTurns={gameTurns} />
      </div>

      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
