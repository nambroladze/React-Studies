import { useState } from "react";
import ListDemo from "./components/ListDemo";
import Challenge from "./components/Challenge";

export default function App() {
  const [showChallenge, setShowChallenge] = useState(false);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#333" }}>📚 React Lists - Learning Demo</h1>

      {!showChallenge ? (
        <>
          <ListDemo />
          <div
            style={{
              marginTop: "40px",
              padding: "20px",
              background: "#f0f8ff",
              borderRadius: "8px",
            }}
          >
            <h2>🎯 Ready for the Challenge?</h2>
            <p>Click the button below to see your challenge!</p>
            <button
              onClick={() => setShowChallenge(true)}
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Start Challenge
            </button>
          </div>
        </>
      ) : (
        <Challenge />
      )}
    </div>
  );
}
