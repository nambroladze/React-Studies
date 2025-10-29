export default function WinnerBanner({ winner, onPlayAgain }) {
  if (winner == null) return null;

  const winnerText =
    winner === "tie" ? "🤝 It's a Tie! 🤝" : `🎉 ${winner} Wins! 🎉`;

  return (
    <div
      style={{
        backgroundColor: winner === "tie" ? "#FFA500" : "#4CAF50",
        color: "white",
        padding: "40px 60px",
        borderRadius: "20px",
        boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
        zIndex: 1000,
        textAlign: "center",
        minWidth: "300px",
      }}
    >
      <h2 style={{ margin: "0 0 20px 0", fontSize: "36px" }}>{winnerText}</h2>

      <button
        onClick={onPlayAgain}
        style={{
          marginTop: "20px",
          padding: "12px 30px",
          fontSize: "18px",
          backgroundColor: "white",
          color: winner === "tie" ? "#FFA500" : "#4CAF50",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        🎲 Play Again
      </button>
    </div>
  );
}
