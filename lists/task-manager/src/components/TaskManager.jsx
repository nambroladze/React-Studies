import { useState } from "react";
import TaskCard from "./TaskCard";
import TaskColumn from "./TaskColumn";
import AddTaskForm from "./AddTaskForm";

// 📋 STAGE 2: Full Task Manager (Next Lesson)
// This teaches: arrays of objects, state lifting, derived state, component composition

export default function TaskManager() {
  // State: Array of task objects
  const [tasks, setTasks] = useState([
    { id: 1, text: "Finish math homework", category: "School" },
    { id: 2, text: "Buy groceries", category: "Personal" },
    { id: 3, text: "Team meeting", category: "Work" },
    { id: 4, text: "Study for test", category: "School" },
  ]);

  const categories = ["Work", "School", "Personal"];

  // Add a new task
  const handleAddTask = (text, category) => {
    const newTask = {
      id: Date.now(), // Simple ID generation
      text: text,
      category: category,
    };
    setTasks([...tasks, newTask]);
  };

  // Delete a task
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Move task to different category
  const handleMoveTask = (taskId, newCategory) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, category: newCategory } : task
      )
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          padding: "20px",
          background: "#e3f2fd",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ color: "#1976d2", marginTop: 0 }}>📋 Full Task Manager</h2>
        <p style={{ fontSize: "16px" }}>
          <strong>Concepts you're learning:</strong>
        </p>
        <ul style={{ lineHeight: "1.8" }}>
          <li>
            📊 <strong>Arrays of objects</strong> - Tasks are objects with
            properties
          </li>
          <li>
            🔄 <strong>State lifting</strong> - State managed in parent
            component
          </li>
          <li>
            🔍 <strong>Derived state</strong> - Filtering tasks by category
          </li>
          <li>
            🧩 <strong>Component composition</strong> - Breaking into smaller
            components
          </li>
        </ul>
      </div>

      {/* Add Task Form */}
      <AddTaskForm onAddTask={handleAddTask} categories={categories} />

      {/* Task Board - Columns for each category */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {categories.map((category) => {
          // Derived state: Filter tasks for this category
          const categoryTasks = tasks.filter(
            (task) => task.category === category
          );

          return (
            <TaskColumn
              key={category}
              category={category}
              tasks={categoryTasks}
              onDeleteTask={handleDeleteTask}
              onMoveTask={handleMoveTask}
              allCategories={categories}
            />
          );
        })}
      </div>

      {/* Code explanation */}
      <details
        style={{
          marginTop: "30px",
          padding: "15px",
          background: "#f5f5f5",
          borderRadius: "8px",
        }}
      >
        <summary
          style={{ cursor: "pointer", fontWeight: "bold", fontSize: "18px" }}
        >
          👀 Show Code Explanation (For Teacher)
        </summary>
        <div style={{ marginTop: "15px" }}>
          <h4>Key Concepts:</h4>
          <pre
            style={{
              background: "#263238",
              color: "#aed581",
              padding: "15px",
              borderRadius: "5px",
              fontSize: "13px",
              overflow: "auto",
            }}
          >
            {`// 1. Array of Objects
const [tasks, setTasks] = useState([
  { id: 1, text: "Finish homework", category: "School" },
  { id: 2, text: "Buy groceries", category: "Personal" }
]);

// 2. Derived State (Filtering)
const categoryTasks = tasks.filter(
  task => task.category === category
);

// 3. Mapping Lists
{categories.map(category => (
  <TaskColumn key={category} category={category} />
))}

// 4. State Lifting
// State lives in TaskManager, passed down as props
<TaskCard 
  task={task} 
  onDelete={handleDeleteTask}  // Function passed down
  onMove={handleMoveTask}       // Function passed down
/>`}
          </pre>
        </div>
      </details>
    </div>
  );
}
