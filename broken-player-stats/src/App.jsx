import { useState } from "react";
import "./App.css";
import PlayerHeader from "./components/PlayerHeader";
import PlayerStats from "./components/PlayerStats";
import PlayerControls from "./components/PlayerControls";

//easy 10 level, medium 20 level, hard 30 level

const INITIAL_PLAYER = {
  name: "New Player",
  xp: 0,
  level: 1,
  difficulty: "easy",
};

function App() {
  const [playerName, setPlayerName] = useState("New Player");
  const [hasStarted, setHasStarted] = useState(false);
  const [difficulty, setDifficulty] = useState("easy");
  const [level, setLevel] = useState(1);
  const [xp, setXp] = useState(0);

  const xpToNextLevel = 100 - (xp % 100);

  const handleGainXp = (amount) => {
    if (!hasStarted) {
      setHasStarted(true);
    }
    setXp(xp + amount);
    setLevel(1 + Math.floor(xp / 100));
    if (level >= 10) {
      setDifficulty("medium");
    }
    if (level >= 20) {
      setDifficulty("hard");
    }
  };

  const handleReset = () => {
    setPlayerName("New Player");
    setHasStarted(false);
    setDifficulty("easy");
    setLevel(1);
    setXp(0);
  };

  return (
    <div className="app-container">
      <div className="app">
        <PlayerHeader playerName={playerName} />

        <div className="content">
          <PlayerStats
            level={level}
            difficulty={difficulty}
            xp={xp}
            xpToNextLevel={xpToNextLevel}
            hasStarted={hasStarted}
          />

          <PlayerControls
            onReduceXp={() => handleGainXp(50)}
            onGainBigXp={() => handleGainXp(50)}
            onReset={handleReset}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
