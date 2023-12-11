import React, { useState } from "react";

// Pass the list of categories to this component from App. Then, update this component to display <button> elements for each category. In order to pass the test, the buttons will need a key prop equal to the category.

// When a button is clicked, the following should happen:

// Whichever button was clicked should have a class of selected. The other buttons should not have any class assigned.
// The list of tasks being displayed should be filtered, so that only tasks that match the category that was clicked are displayed.
// If the button for "All" is selected, all the tasks should be displayed.


function CategoryFilter({ categories }) {
  // Create an array of selected states, initially set to false for all buttons
  const [selectedButtons, setSelectedButtons] = useState(Array(categories.length).fill(false));

  function handleClick(index) {
    // Create a copy of the selectedButtons array and toggle the selected state for the clicked button
    const updatedSelectedButtons = [...selectedButtons];
    updatedSelectedButtons[index] = !updatedSelectedButtons[index];
    setSelectedButtons(updatedSelectedButtons);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, index) => {
        return (
          <button
            key={category}
            className={selectedButtons[index] ? "selected" : ""}
            onClick={() => handleClick(index)} // Pass the index of the clicked button
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;

