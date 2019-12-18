import React from "react";

// Parent
export default class Parent extends React.Component {
  render() {
    const count = 1;
    const greeting = 'hello';

    return <Child count={count} greeting={greeting} />
  }
}

// Simplly only Child
// const Child = ({ count }) => <div>count: {count}</div>;

// Child passing props
const Child = ({ count, greeting }) => <Grandson count={count} greeting={greeting} />;

// Grandson passing props
const Grandson = ({ count, greeting }) => <GrandGrandchild count={count} greeting={greeting} />;

// GrandGrandchild who wants to use props
const GrandGrandchild = ({ count, greeting }) => (
  <>
    <div>count: {count}</div>
    <div>greeting: {greeting}</div>
  </>
);