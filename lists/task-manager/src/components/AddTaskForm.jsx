import { useState } from "react";

// ➕ AddTaskForm Component
// Form to add new tasks

export default function AddTaskForm({ onAddTask, categories }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTask(text.trim(), category);
      setText(""); // Clear input
    }
  };

  return (
    <div style={{
      padding: "20px",
      background: "#fff",
      borderRadius: "8px",
      border: "2px solid #4CAF50",
      marginBottom: "20px"
    }}>
      <h3 style={{ color: "#2e7d32", marginTop: 0 }}>➕ Add New Task</h3>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter task..."
          style={{
            flex: "1",
            minWidth: "200px",
            padding: "10px",
            fontSize: "16px",
            border: "2px solid #ddd",
            borderRadius: "5px"
          }}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
            border: "2px solid #ddd",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          ➕ Add Task
        </button>
      </form>
    </div>
  );
}

