import React, { useState } from "react"

export const Dish = (props) => {
  const [counter, setCounter] = useState(0);

  const addDish = () => {
    setCounter(counter + 1);
  };

  const delDish = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="Dish">
      <h2>{props.name}</h2>
      <p>Price: ${props.price}</p>
      <p>Amount: {counter}</p>
      <button onClick={addDish()}>Add Dish!</button>
      <button onClick={delDish()}>Delete Dish!</button>
    </div>
  );
};
