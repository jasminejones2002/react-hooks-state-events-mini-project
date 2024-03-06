import React, { useState } from "react";
import { CATEGORIES } from "../data";

function NewTaskForm({onTaskFormSubmit}) {
  const [newTasks, setNewTasks] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("") 

  const handleDetailChange = (e) => {
    console.log(e.target.value)
    setNewTasks(e.target.value)
  }

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTask = {
      text: newTasks,
      category: selectedCategory,
    }
    onTaskFormSubmit(newTask)
    setNewTasks("")
    setSelectedCategory("")
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={newTasks} onChange={handleDetailChange}/>
      </label>
      <label>
        Category
        <select name="category" value={selectedCategory} onChange={handleCategoryChange}>
          {CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
