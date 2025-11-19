import TaskCard from "./TaskCard";

// 📁 TaskColumn Component
// Displays a column for one category with all its tasks

export default function TaskColumn({ category, tasks, onDeleteTask, onMoveTask, allCategories }) {
  // Color scheme for each category
  const categoryColors = {
    Work: { bg: "#e3f2fd", border: "#2196F3", header: "#1976d2" },
    School: { bg: "#fff3e0", border: "#ff9800", header: "#e65100" },
    Personal: { bg: "#f3e5f5", border: "#9c27b0", header: "#6a1b9a" }
  };

  const colors = categoryColors[category] || categoryColors.Work;

  return (
    <div style={{
      padding: "15px",
      background: colors.bg,
      borderRadius: "8px",
      border: `2px solid ${colors.border}`,
      minHeight: "200px"
    }}>
      <h3 style={{ 
        color: colors.header, 
        marginTop: 0,
        marginBottom: "15px",
        paddingBottom: "10px",
        borderBottom: `2px solid ${colors.border}`
      }}>
        {category} ({tasks.length})
      </h3>

      <div>
        {tasks.length === 0 ? (
          <p style={{ 
            color: "#999", 
            fontStyle: "italic",
            textAlign: "center",
            padding: "20px"
          }}>
            No tasks yet
          </p>
        ) : (
          tasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={onDeleteTask}
              onMove={onMoveTask}
              allCategories={allCategories}
            />
          ))
        )}
      </div>
    </div>
  );
}

