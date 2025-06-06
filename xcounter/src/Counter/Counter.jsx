import React, { useState } from "react";

const Counter = () => {
  const [valueOfCount, setCount] = useState(0);

  const Increment = () => {
    // count++;
    setCount((count) => count + 1);
  };

  const Decrement = () => {
    // count--;
    setCount((count) => count - 1);
  };

  return (
    <>
      <div>
        <h1>Counter APP</h1>
      </div>
      <div>count: {valueOfCount}</div>
      <div>
        <button type="button" onClick={Increment}>
          Increment
        </button>
        <button type="button" onClick={Decrement}>
          Decrement
        </button>
      </div>
    </>
  );
};

export default Counter;
