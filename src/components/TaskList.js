import React from "react";
import Task from './Task';

function TaskList({ tasks, items, setItems }) {

  function deleteItem(itemText) {
    // Filter out the item with the given text
    const updatedItems = items.filter((item) => item.text !== itemText);
    setItems(updatedItems);
  }

  return (
    <div className="tasks">
      {items.map((task) => (
        <Task
          key={task.text}
          text={task.text}
          category={task.category}
          deleteItem={deleteItem}
        />
      ))}
    </div>
  );
}

export default TaskList;
