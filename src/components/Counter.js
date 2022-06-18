// import { useState } from "react";
import React from "react";

// * Functional Component
// export default function BtnIncDec() {
//   const [count, setCount] = useState(0); // * Boshlangich qiymat
//   function inc() {
//     setCount((prev) => prev + 1);
//   }
//   function dec() {
//     setCount((prev) => prev - 1);
//   }
//   return (
//     <>
//       <h3>Count: {count}</h3>
//       <button onClick={inc} className="btn btn-success mx-2">
//         INCR
//       </button>
//       <button onClick={dec} className="btn btn-danger">
//         DECR{" "}
//       </button>
//     </>
//   );
// }

// * Class Component

class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }
  // * SetState() - method stateni ozgartirish uchun
  increment(){
    this.setState({count: this.state.count + 1})
  }
  decrement(){
    this.setState({count: this.state.count - 1})
  }
  render() {
    return(
      <>
        <h4>Count: {this.state.count}</h4>
        <button className="btn btn-primary" onClick={this.increment}>INCR</button>
        <button className="btn btn-danger" onClick={this.decrement}>DECR</button>
      </>
    )
  }
}

export default Counter;