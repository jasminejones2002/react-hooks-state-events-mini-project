import React from "react";

function Task({text, category, onDelete}) {
  const handleDelete = (e) => {
    console.log("this has been deleted:", e)
    e.preventDefault()
    onDelete()
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
