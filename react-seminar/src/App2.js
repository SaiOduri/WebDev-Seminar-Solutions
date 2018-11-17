import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App2 extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
        count: this.state.count + 1
      })
  };

  render() {

    return (
      <div className="App">
        {this.state.count}
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}

export default App2;
