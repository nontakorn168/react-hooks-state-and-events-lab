import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [itemToDisplay, setItemToDisplay] = useState(items);


  function handleFilter(event) {
    const category = event.target.value;
    setSelectedCategory(category);

    // Update the items to display based on the selected category
    setItemToDisplay(
      category === "All"
        ? items
        : items.filter((item) => item.category === category)
    );
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
