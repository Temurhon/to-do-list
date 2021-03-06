import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import { render } from '@testing-library/react';

class App extends Component {

  state={
    todos:[
      {
        id: 1,
        title: 'Take out the Rubbish Bin',
        completed: false,
      },
      {
        id: 2,
        title: 'Pet the dog',
        completed: false,
      },
      {
        id: 3,
        title: 'Fly a plane',
        completed: false,
      },
    ]
  }
//toggle complete
  markComplete = (id) => {
      this.setState({ todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      })});
  }

  render() {
  return (
    <div className="App">
     <Todos todos = {this.state.todos} markComplete={this.markComplete}/>
    </div>
  );
  }
}

export default App;
