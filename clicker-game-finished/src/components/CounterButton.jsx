function CounterButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        margin: "5px",
        padding: "10px 20px",
        cursor: "pointer",
        borderRadius: "8px",
      }}
    >
      {text}
    </button>
  );
}

export default CounterButton;
