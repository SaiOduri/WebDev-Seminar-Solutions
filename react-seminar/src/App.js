import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo.js'

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: [],
      currentTodo: ""
    };
  }

  onInputChange = e => {
    this.setState({
        currentTodo: e.target.value
      });
  }

  click = () => {
    let tempTodos = this.state.todos;
    tempTodos.push(this.state.currentTodo)
    this.setState({
      todos: tempTodos,
      currentTodo: ""
    });
  }

  deleteTodo = i => {
    let tempTodos = this.state.todos;
    tempTodos.splice(i, 1);
    this.setState({
      todos: tempTodos
    });
  }

  render() {

    const allTodos = this.state.todos.map((e, i) => {
      return(
        <Todo todo={e} index={i} delete={this.deleteTodo} />
      )
    })

    return (
      <div className="App">
        <input placeholder="Enter something to do" value={this.state.currentTodo}
        onChange={this.onInputChange}/>
        <button onClick={() => this.click()}>Add</button>
        <br />
        {this.state.todos.length == 0 ? "No Todos" : <ul>{allTodos}</ul>}
      </div>
    );
  }
}

export default App;
