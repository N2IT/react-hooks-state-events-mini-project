import React from "react";
import Task from './Task';

function TaskList({ tasks, setItems }) {

  function deleteItem(itemText) {
    // Filter out the item with the given text
    const updatedItems = tasks.filter((task) => task.text !== itemText);
    setItems(updatedItems);
  }

  return (
    <div className="tasks">
      {tasks.map((task) => 
        <Task
          key={task.text}
          text={task.text}
          category={task.category}
          deleteItem={deleteItem}
        />
      )}
    </div>
  );
}

export default TaskList;
