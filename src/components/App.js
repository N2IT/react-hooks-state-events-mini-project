import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";


import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });


function App() {
  const [items, setItems] = useState(TASKS);
  const [filterBy, setFilterBy] = useState("All");

  function addNewItem(task) {
    setItems([...items, task ])
  }

  const itemsToDisplay = items.filter((item) => {
    if (filterBy === "All") {
      return true;
    } else {
      return item.category === filterBy;
    }
  })

//if the category === state then must be the selected category (button) 

  function handleClick(category){
    setFilterBy(category)
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleClick={handleClick} filterBy={filterBy} />
      <NewTaskForm items={items} setItems={setItems} categories={CATEGORIES} onTaskFormSubmit={addNewItem} />
      <TaskList items={itemsToDisplay} setItems={setItems} tasks={TASKS} />
    </div>
  );
}

export default App;
