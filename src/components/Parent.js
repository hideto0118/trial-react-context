import React, { createContext, useState, useContext } from "react";

// Make context
const CounterContext = createContext();

// Parent
const Parent = () => {
  const [num, setNum] = useState(0);

  return (
    <CounterContext.Provider
      value={{
        num,
        increment: () => setNum(num + 1)
      }}
    >
      <Child />
    </CounterContext.Provider>
  );
};
export default Parent;

// Child
const Child = () => <Grandchild />;

// Grandchild
const Grandchild = () => {
  const counter = useContext(CounterContext); // Use hooks
  return (
    // You can write the same way as always
    <>
      <p>{counter.num}</p>
      <button onClick={counter.increment}>Increment</button>
    </>
  );

}