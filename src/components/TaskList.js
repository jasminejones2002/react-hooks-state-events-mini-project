import React from "react";
import Task from "./Task";

function TaskList({tasks, onDelete}) {
  console.log("Tasks recieved by TaskList:", tasks)
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task 
          key={index} 
          category={task.category} 
          text={task.text}
          onDelete={onDelete}
          />
      ))}
    </div>
  );
}

export default TaskList;
