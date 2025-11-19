# 📚 Teacher Guide: Task Manager Project

## Project Overview

A progressive Task Manager project that teaches React lists and related concepts over 2 lessons.

---

## 📅 Lesson Plan

### **Lesson 1: Introduction to Lists** (Today)

**What students learn:**

- Basic `.map()` with arrays
- The `key` prop
- Rendering lists in React

**In class:**

- Use the simple lists demo (from previous lesson)
- Explain `.map()` with simple examples
- Practice with arrays of strings

**Homework (Stage 1):**

- Students complete `TaskList.jsx` component
- Create an array of tasks
- Display them using `.map()`
- Time: 30-45 minutes

---

### **Lesson 2: Task Manager with Categories** (Next Lesson)

**What students learn:**

- Arrays of objects
- State lifting
- Derived state (filtering)
- Component composition
- Props and events

**In class:**

- Review homework
- Introduce arrays of objects
- Build the full Task Manager together
- Explain state lifting concept

**Project duration:** 3-5 days total

---

## 🎯 Learning Progression

### Stage 1: Simple List (Homework)

**File:** `src/components/TaskList.jsx`

**Skills practiced:**

- ✅ Creating arrays
- ✅ Using `.map()`
- ✅ Understanding `key` prop
- ✅ Basic styling

**Student task:**

```jsx
const tasks = ["Do homework", "Clean room", "Read a book"];

return (
  <ul>
    {tasks.map((task, index) => (
      <li key={index}>✅ {task}</li>
    ))}
  </ul>
);
```

---

### Stage 2: Full Task Manager (Next Lesson)

**Files:**

- `TaskManager.jsx` - Main component
- `TaskCard.jsx` - Individual task component
- `TaskColumn.jsx` - Category column component
- `AddTaskForm.jsx` - Form component

**New concepts introduced:**

1. **Arrays of Objects**

   ```jsx
   const tasks = [
     { id: 1, text: "Finish homework", category: "School" },
     { id: 2, text: "Buy groceries", category: "Personal" },
   ];
   ```

2. **State Lifting**

   - All state in `TaskManager` parent
   - Functions passed down as props
   - Child components call parent functions

3. **Derived State**

   ```jsx
   const categoryTasks = tasks.filter((task) => task.category === category);
   ```

4. **Component Composition**
   - Break UI into smaller components
   - Each component has a single responsibility
   - Components work together

---

## 📋 Teaching Points

### When teaching Stage 2:

1. **Start with the data structure**

   - Show how tasks are now objects
   - Explain `id`, `text`, `category` properties
   - Why objects are better than just strings

2. **Explain state lifting**

   - "Where should state live?"
   - Show state in parent, passed as props
   - Functions passed down, called from children

3. **Demonstrate filtering**

   - Show `tasks.filter()` in action
   - Explain derived state concept
   - "We don't store filtered lists, we calculate them"

4. **Component breakdown**
   - `TaskManager` - orchestrates everything
   - `TaskColumn` - displays one category
   - `TaskCard` - displays one task
   - `AddTaskForm` - handles input

---

## 🎓 Assessment

### After Stage 1 (Homework):

- ✅ Can they create an array?
- ✅ Can they use `.map()` correctly?
- ✅ Do they include the `key` prop?

### After Stage 2 (Full Project):

- ✅ Can they add new tasks?
- ✅ Can they delete tasks?
- ✅ Can they move tasks between categories?
- ✅ Do they understand why state is in the parent?
- ✅ Can they explain component composition?

---

## 💡 Extension Ideas

For advanced students:

1. **Add due dates**

   - Add `dueDate` property
   - Sort tasks by date
   - Show overdue tasks in red

2. **Add priorities**

   - High, Medium, Low
   - Color code by priority
   - Sort by priority

3. **Local storage**

   - Save tasks to browser
   - Persist between sessions

4. **Drag and drop**
   - Move tasks by dragging
   - More advanced interaction

---

## 🐛 Common Mistakes to Watch For

1. **Missing key prop** - React warnings
2. **Mutating state directly** - Must use setState
3. **Forgetting spread operator** - `[...tasks, newTask]`
4. **Wrong filter logic** - Check category matching
5. **Props not passed down** - Check component tree

---

## 📝 Files Structure

```
task-manager/
├── src/
│   ├── App.jsx              # Main app with stage switcher
│   ├── components/
│   │   ├── TaskList.jsx     # Stage 1: Simple list (homework)
│   │   ├── TaskManager.jsx  # Stage 2: Full manager
│   │   ├── TaskCard.jsx     # Individual task component
│   │   ├── TaskColumn.jsx   # Category column component
│   │   └── AddTaskForm.jsx  # Add task form
│   └── main.jsx
├── HOMEWORK-STAGE1.md       # Homework instructions
└── TEACHER-GUIDE.md         # This file
```

---

## 🚀 Running the Project

```bash
cd task-manager
npm install
npm run dev
```

The app has a toggle to switch between:

- **Stage 1:** Simple task list (homework)
- **Stage 2:** Full task manager (next lesson)

---

## ✅ Success Criteria

Students have successfully learned React lists when they can:

1. Create arrays and use `.map()` independently
2. Understand why `key` is needed
3. Work with arrays of objects
4. Lift state to parent components
5. Break UI into smaller components
6. Pass functions as props

Good luck with your lesson! 🎉
