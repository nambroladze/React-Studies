function PlayerControls({ onReduceXp, onGainBigXp, onReset }) {
  return (
    <section className="card controls-card">
      <h2>Controls</h2>
      <div className="buttons-row">
        <button onClick={onReduceXp}>-50 XP</button>
        <button onClick={onGainBigXp}>+50 XP</button>
      </div>

      <div className="buttons-row">
        <button className="reset-button" onClick={onReset}>
          Reset Player
        </button>
      </div>
    </section>
  );
}

export default PlayerControls;
