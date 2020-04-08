import React from 'react';
import './App.css';
import Todos from './Components/Todos';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
  state = {
    todos: [
      {
        id: "d99498ec-fde5-4fba-9c7e-d4936a545c6b",
        title: "Clean kitchen",
        completed: false,
      },
      {
        id: "9392eae9-3646-4804-90a9-96c5ebbdbde3",
        title: "Sweep living room",
        completed: false,
      },
      {
        id: "126a96bb-1c6e-4a49-8f50-cbc39f62b21f",
        title: "Wash clothes",
        completed: false,
      },
    ],
  };

  toggleCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  addTodo = (newTitle) => {
    if (newTitle === "") {
      return;
    }

    const newTodo = {
      id: uuidv4(),
      title: newTitle,
      completed: false,
    };

    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  render() {
    return (
      <div className="App">
        <Todos
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
          addTodo={this.addTodo}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
