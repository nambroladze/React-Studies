import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handlePlayClick(colIndex, rowIndex) {
    setGameBoard((prevGameBoard) => {});
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => handlePlayClick(colIndex, rowIndex)}
                  disabled={playerSymbol.value !== null}
                >
                  {playerSymbol.value}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
