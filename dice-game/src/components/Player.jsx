export default function Player({ title, onClick, text, disabled }) {
  let style = baseStyle;

  if (disabled) {
    style = { ...style, ...disabledStyle };
  }

  return (
    <div>
      <h3>{title}</h3>
      <div style={{ fontSize: "60px" }}>⚀</div>

      <button onClick={onClick} style={style} disabled={disabled}>
        {text || "🎲 Roll Dice"}
      </button>
    </div>
  );
}

const baseStyle = {
  margin: "10px",
  padding: "15px 30px",
  fontSize: "20px",
  cursor: "pointer",
  borderRadius: "10px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
};

const disabledStyle = {
  backgroundColor: "#9e9e9e",
  cursor: "not-allowed",
  opacity: 0.6,
};
