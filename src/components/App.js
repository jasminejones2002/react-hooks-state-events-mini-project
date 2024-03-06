import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const addTask = (newTask) => {
    console.log(tasks)
    setTasks([...tasks, newTask])
  }

  const deleteTask = (index) => {
    const newTaskList = tasks.filter((index) => index !== index)
    setTasks(newTaskList)
  }

  const categorySelect = (category) => {
    setSelectedCategory(category)
  }

  const filteredTasks = 
    selectedCategory === "All" 
    ? tasks 
    : tasks.filter((task) => task.category === selectedCategory)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} onSelectCategory={categorySelect}/>
      <NewTaskForm onTaskFormSubmit={addTask}/>
      
      <TaskList tasks={filteredTasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
