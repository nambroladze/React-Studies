export default function Player({ title, index, handleClick, isDisabled }) {
  const diceEmojis = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

  return (
    <>
      <div>
        <h3>{title}</h3>
        <div style={{ fontSize: "60px" }}>{diceEmojis[index - 1]}</div>
        <button onClick={handleClick} disabled={isDisabled}>
          Roll Dice
        </button>
      </div>
    </>
  );
}
