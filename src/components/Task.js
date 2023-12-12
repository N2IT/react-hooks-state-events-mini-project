import React from "react";

function Task({ text, category, deleteItem }) {
  const handleDeleteClick = () => {
    deleteItem(text); // Pass the text to identify the item to be deleted
  };
  
  return (
    <div className="task" key={text}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleDeleteClick} className="delete">X</button>
    </div>
  );
}

export default Task;
