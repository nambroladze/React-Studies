import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      await setCount(count + 10);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>{count}</h1>
    </>
  );
}

export default App;
