function PlayerStats({ level, difficulty, xp, xpToNextLevel, hasStarted }) {
  return (
    <section className="card stats-card">
      <h2>Stats</h2>

      {!hasStarted && (
        <p className="hint">Click a button below to start gaining XP.</p>
      )}

      <p>
        <span className="label">XP:</span> {xp}
      </p>
      <p>
        <span className="label">Level:</span> {level}
      </p>

      {/* Conditional rendering based on derived values */}
      {level >= 10 ? (
        <p className="badge max-level">Max difficulty reached!</p>
      ) : (
        <p className="badge next-level">{xpToNextLevel} XP until next level</p>
      )}

      {difficulty === "medium" && (
        <p className="hard-mode-text">
          Hard mode is ON — XP gains are serious business.
        </p>
      )}
    </section>
  );
}

export default PlayerStats;
