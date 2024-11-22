import React, { useState }from "react";
import items from "../data/items";




// function handleClick(id) {
//   const updatedItems = items.map((item) =>
//     item.id === id ? { ...item, className: "in-cart" } : item
//   );
//   items(updatedItems)
// }



function Item({ name, category }) {
 const [isInCart, setIsInCart] = useState(false);
 function handleClick() {
  setIsInCart((prevState) => !prevState);
}
  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{isInCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
