// 📝 STAGE 1: HOMEWORK - Simple Task List
// This is what students should complete at home after learning lists

export default function TaskList() {
  // TODO: Students should create this array with their own tasks
  const tasks = [
    "Do homework",
    "Clean room",
    "Read a book",
    "Play outside",
    "Help with dinner",
  ];

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          padding: "20px",
          background: "#fff3e0",
          borderRadius: "8px",
          marginBottom: "20px",
          border: "2px solid #ff9800",
        }}
      >
        <h2 style={{ color: "#e65100", marginTop: 0 }}>
          🎯 Your Homework Assignment
        </h2>
        <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
          <strong>Task:</strong> Create a simple task list that displays tasks
          using <code>.map()</code>
        </p>
        <ul style={{ lineHeight: "2" }}>
          <li>Create an array of tasks (like the one above)</li>
          <li>
            Use <code>.map()</code> to display each task
          </li>
          <li>
            Don't forget the <code>key</code> prop!
          </li>
          <li>Style your list to make it look nice</li>
        </ul>
      </div>

      <div
        style={{
          padding: "20px",
          background: "#f5f5f5",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <h3 style={{ color: "#333" }}>💻 Example Code Structure:</h3>
        <pre
          style={{
            background: "#263238",
            color: "#aed581",
            padding: "15px",
            borderRadius: "5px",
            overflow: "auto",
            fontSize: "14px",
          }}
        >
          {`const tasks = ["Do homework", "Clean room", "Read a book"];

return (
  <div>
    <h2>My Tasks</h2>
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          ✅ {task}
        </li>
      ))}
    </ul>
  </div>
);`}
        </pre>
      </div>

      {/* Student's work area - they should modify this */}
      <div
        style={{
          padding: "20px",
          background: "#e8f5e9",
          borderRadius: "8px",
          border: "2px dashed #4caf50",
        }}
      >
        <h3 style={{ color: "#2e7d32" }}>
          ✨ Your Task List (Complete this!):
        </h3>

        {/* TODO: Students complete this section */}
        <div
          style={{
            marginTop: "15px",
            padding: "15px",
            background: "#fff",
            borderRadius: "5px",
          }}
        >
          <h4 style={{ marginTop: 0 }}>📋 My Tasks:</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {tasks.map((task, index) => (
              <li
                key={index}
                style={{
                  padding: "12px",
                  margin: "8px 0",
                  background: "#f1f8e9",
                  borderRadius: "6px",
                  border: "1px solid #c8e6c9",
                  fontSize: "16px",
                }}
              >
                ✅ {task}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tips section */}
      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          background: "#e1f5fe",
          borderRadius: "8px",
        }}
      >
        <h3 style={{ color: "#0277bd" }}>💡 Tips:</h3>
        <ul style={{ lineHeight: "1.8" }}>
          <li>Try changing the emoji (✅, ⭐, 🎯, etc.)</li>
          <li>Add more tasks to your array</li>
          <li>Experiment with different colors and styles</li>
          <li>Make each task look like a card or button</li>
        </ul>
      </div>
    </div>
  );
}
