import React, { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  if (count) {
    throw new Error("Not a correct click");
  }
  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
};
export default Counter;
