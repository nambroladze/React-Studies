// 🎴 TaskCard Component
// Shows a single task with delete and move buttons

export default function TaskCard({ task, onDelete, onMove, allCategories }) {
  return (
    <div
      style={{
        padding: "15px",
        margin: "8px 0",
        background: "#fff",
        borderRadius: "8px",
        border: "2px solid #e0e0e0",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <p
        style={{
          margin: "0 0 12px 0",
          fontSize: "16px",
          fontWeight: "500",
        }}
      >
        {task.text}
      </p>

      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {/* Delete button */}
        <button
          onClick={() => onDelete(task.id)}
          style={{
            padding: "6px 12px",
            fontSize: "12px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          🗑️ Delete
        </button>

        {/* Move to category buttons */}
        {allCategories
          .filter((cat) => cat !== task.category)
          .map((category) => (
            <button
              key={category}
              onClick={() => onMove(task.id, category)}
              style={{
                padding: "6px 12px",
                fontSize: "12px",
                backgroundColor: "#2196F3",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              ➡️ {category}
            </button>
          ))}
      </div>
    </div>
  );
}
