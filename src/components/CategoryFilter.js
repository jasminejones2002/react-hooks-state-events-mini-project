import React, { useState } from "react";
import { CATEGORIES } from "../data";

function CategoryFilter() {
  const [categorySelected, setCategorySelected] = useState("All")

  const handleFilter = (category) => {
    console.log(category)
    setCategorySelected(category)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CATEGORIES.map((category) => (
        <button 
          key={category}
          className={categorySelected === category ? "selected" : ""}
          onClick={() => handleFilter(category)}
          >
           {category}
          </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
