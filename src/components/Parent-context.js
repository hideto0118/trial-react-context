import React from 'react';

// Make context
const CounterContext = React.createContext();

// Parent
export default class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0 //define state
    }
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <CounterContext.Provider
        value={{ count: this.state.count, increment: this.increment }} // pass functions too
        >
          <Child />
      </CounterContext.Provider>
    );
  }
}

// Child doing nothing
const Child = () => <Grandchild />

// GrandChild as a class
class Grandchild extends React.Component {
  static contextType = CounterContext; // using contextType
  render() {
    const { count, increment } = { ...this.context }; //receiving context
    return (
      <>
        <p>count: {count}</p>
        <button onClick={increment}>increment</button>
      </>
    );
  }
}