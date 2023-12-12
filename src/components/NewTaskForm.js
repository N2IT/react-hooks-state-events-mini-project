import React, { useState } from "react";

function NewTaskForm({ items, setItems, onTaskFormSubmit, categories }) {
  const filteredCategories = categories.filter((category) => category !== "All")
  const [formData, setFormData] = useState({
    text: "",
    category: filteredCategories[0],
  })

  function handleChange(event) {
    const { name, value } = event.target;
    

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    onTaskFormSubmit({ text: formData.text, category: formData.category })
    setFormData({
      text: "",
      category: filteredCategories[0]
    })
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={handleChange}type="text" name="text" value={formData.text} />
      </label>
      <label>
        Category
        <select onChange={handleChange} name="category" value={formData.category}>
          {filteredCategories.map((category) => {
            return (
              <option key={category}>
                {category}
              </option>
            )
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
