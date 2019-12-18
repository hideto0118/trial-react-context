import React, { createContext } from 'react';

const { Provider, Consumer } = createContext();

// Parent
const Parent = () => (
  <Provider value={{ count: 1, greeting: 'hello' }}>
    <Child />
  </Provider>
);
export default Parent;

// Child props not passed
const Child = () => <Grandchild />;

// Grandchild props not passed
const Grandchild = () => <GreatGrandchild />

// GreatGreatchild
const GreatGrandchild = () => (
  <Consumer>
    {({ count, greeting }) => (
      <>
        <div>count: {count}</div>
        <div>greeting: {greeting}</div>
      </>
    )}
  </Consumer>
);
