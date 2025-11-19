import { useState } from "react";
import TaskList from "./components/TaskList";
import TaskManager from "./components/TaskManager";

export default function App() {
  const [stage, setStage] = useState("homework"); // "homework" or "full"

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          marginBottom: "20px",
          padding: "15px",
          background: "#e3f2fd",
          borderRadius: "8px",
        }}
      >
        <h1 style={{ color: "#1976d2", margin: "0 0 10px 0" }}>
          📋 Task Manager Project
        </h1>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={() => setStage("homework")}
            style={{
              padding: "8px 16px",
              fontSize: "14px",
              backgroundColor: stage === "homework" ? "#1976d2" : "#90caf9",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Stage 1: Homework (Simple List)
          </button>
          <button
            onClick={() => setStage("full")}
            style={{
              padding: "8px 16px",
              fontSize: "14px",
              backgroundColor: stage === "full" ? "#1976d2" : "#90caf9",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Stage 2: Full Task Manager
          </button>
        </div>
      </div>

      {stage === "homework" ? <TaskList /> : <TaskManager />}
    </div>
  );
}
