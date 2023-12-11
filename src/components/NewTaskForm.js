import React from "react";

function NewTaskForm({ categories, filterBy }) {

  const filteredCategories = categories.filter((category) => category !== "All")
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {filteredCategories.map((category) => {
            return (
              <option key={category}>
                {category}</option>
            )
          })}
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
