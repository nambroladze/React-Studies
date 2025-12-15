function PlayerHeader({ playerName, level }) {
  return (
    <header className="player-header">
      <h1>Level Up Tracker</h1>
      <p className="player-name">{playerName}</p>
      <p className="player-level">Level {level}</p>
    </header>
  );
}

export default PlayerHeader;
