import { useState, useEffect } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ activePlayer, onSquareSelect }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSquareSelect(rowIndex, colIndex) {
    setGameBoard((prevValue) => {
      const updatedBoard = [...prevValue.map((row) => [...row])];
      updatedBoard[rowIndex][colIndex] = activePlayer;
      return updatedBoard;
    });

    onSquareSelect(rowIndex, colIndex);
  }

  useEffect(() => {
    console.log(gameBoard);
  }, [gameBoard]);

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => handleSquareSelect(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
