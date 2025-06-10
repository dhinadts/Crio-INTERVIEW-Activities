import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { valueOfCount: 0 };
  }

  increment = () => {
    this.setState((prev) => ({ valueOfCount: prev.valueOfCount + 1 }));
  };

  decrement = () => {
    this.setState((prev) => ({ valueOfCount: prev.valueOfCount - 1 }));
  };

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <p>Count: {this.state.valueOfCount}</p>
        <button name="Increment" onClick={this.increment}>
          Increment
        </button>
        <button name="Decrement" onClick={this.decrement}>
          Decrement
        </button>
      </div>
    );
  }
}

export default Counter;
