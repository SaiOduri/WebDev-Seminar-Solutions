import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Todo extends Component {
  constructor(){
    super();
  }

  render() {

    return (
        <li key={this.props.index}>{this.props.todo}<button onClick={() => this.props.delete(this.props.index)}>X</button></li>
    );
  }
}

export default Todo;
