import { useState } from "react";

import CounterButton from "./components/CounterButton";
import CounterDisplay from "./components/CounterDisplay";
import Header from "./components/Header";
import Message from "./components/Message";

function App() {
  const [counter, setCounter] = useState(0);
  const projectName = "Clicker-Game";

  return (
    <>
      <Header projectName={projectName} />

      <CounterDisplay count={counter} />

      <Message count={counter} />

      <CounterButton
        title={"Increase"}
        handleClick={() => {
          setCounter(counter + 1);
        }}
      />

      <CounterButton
        title={"Decrease"}
        handleClick={() => {
          setCounter(counter - 1);
        }}
      />
    </>
  );
}

export default App;
