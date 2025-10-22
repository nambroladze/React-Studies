import { useState } from "react";
import CounterDisplay from "./components/CounterDisplay";
import Message from "./components/Message";
import CounterButton from "./components/CounterButton";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);
  const handleReset = () => setCount(0);
  const handleDecrease = () => setCount(count - 1);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🔥 React Click Tracker 🔥</h1>

      {/* Dynamic JSX with {} */}
      <CounterDisplay count={count} />

      {/* Dynamic message based on count */}
      <Message count={count} />

      {/* Buttons */}
      <CounterButton text="Increase" onClick={handleIncrease} />
      <CounterButton text="Decrease" onClick={handleDecrease} />
      <CounterButton text="Reset" onClick={handleReset} />
    </div>
  );
}

export default App;
