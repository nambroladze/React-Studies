# 📝 Homework: Create Your Task List

## What to do:

After learning about React lists today, you need to create a simple task list at home!

---

## 🎯 Your Mission:

Create a list that shows your tasks using `.map()`

---

## 📋 Steps:

### Step 1: Open the project
1. Open `task-manager` folder
2. Run `npm run dev` in terminal
3. Click "Stage 1: Homework (Simple List)"

### Step 2: Create your task array
In `src/components/TaskList.jsx`, find this line:
```jsx
const tasks = [
  "Do homework",
  "Clean room",
  "Read a book",
  "Play outside",
  "Help with dinner"
];
```

**Change it to YOUR tasks!** Add at least 5 tasks.

### Step 3: Make sure it displays
The code should already use `.map()` to show your tasks. Check that:
- ✅ Each task appears in the list
- ✅ There's an emoji before each task
- ✅ It looks nice!

### Step 4: Make it yours!
- Change the emoji (try: ⭐, 🎯, 📌, ✨)
- Change the colors
- Add more tasks
- Make it look cool!

---

## 💻 What the code should look like:

```jsx
const tasks = ["Your", "Tasks", "Here"];

return (
  <ul>
    {tasks.map((task, index) => (
      <li key={index}>
        ✅ {task}
      </li>
    ))}
  </ul>
);
```

---

## ✅ Checklist:

Before next lesson, make sure you:
- [ ] Created an array with at least 5 tasks
- [ ] Used `.map()` to display them
- [ ] Added the `key` prop
- [ ] Made it look nice with colors/styling
- [ ] Tested it - it works!

---

## 🎓 What you're practicing:

- Creating arrays
- Using `.map()` to loop through arrays
- Understanding the `key` prop
- Styling in React

---

## 🚀 Next lesson:

We'll learn to:
- ➕ Add new tasks
- 🗑️ Delete tasks
- 📁 Organize tasks into categories
- 🔄 Move tasks between categories

**Time needed:** 30-45 minutes

**Good luck!** 💪

