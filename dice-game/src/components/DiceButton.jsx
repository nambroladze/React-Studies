function DiceButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        margin: "10px",
        padding: "15px 30px",
        fontSize: "20px",
        cursor: "pointer",
        borderRadius: "10px",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
      }}
    >
      {text || "🎲 Roll Dice"}
    </button>
  );
}

export default DiceButton;
