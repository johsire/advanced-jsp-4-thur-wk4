import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      num: 0
    }
    // this.increaseNum = this.increaseNum.bind(this)
    this.someFunction = this.someFunction.bind(this)
  }

  someFunction() {
    this.setState({
      num: this.state.num + 1
    })
  };

  // increaseNum() {
  //   this.setState({
  //     num: this.state.num + 1
  //   })
  //   alert(this.state.num)
  // }

  // increaseNumClosure() {
  //   let num = 0
  //   return function() {
  //     num ++
  //     alert (num);
  //   }
  // }
  render() {
    return (
      <div className="App">
      {/* arror function adopts the parents scope/context/ to find the context of defination of this key word */}
       <button onClick={this.someFunction()}>Click Me</button>
       {/* <button onClick={this.increaseNumClosure()}>Click Me</button>
       <button onClick={this.increaseNumClosure()}>Click Me</button>
       <button onClick={this.increaseNumClosure()}>Click Me</button> */}
      </div>
    );
  }
}

export default App;
