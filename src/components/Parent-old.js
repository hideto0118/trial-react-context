import React from "react";

// Parent
export default class Parent extends React.Component {
  render() {
    const count = 1;
    const greeting = 'hello';

    return <Child count={count} greeting={greeting} />
  }
}

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


////// Use render props //////
// export default class Parent extends React.Component {
//   render() {
//     const count = 1;
//     const greeting = 'hello';

//     const greatGrandChild = (
//       <>
//         <div>count: {count}</div>
//         <div>greeting: {greeting}</div>
//       </>
//     );

//     return <Child ggc={greatGrandChild} />;
//   }
// }

// // child
// const Child = ({ ggc }) => <Grandchild ggc={ggc} />

// // grandchild
// const Grandchild = ({ ggc }) => ggc;