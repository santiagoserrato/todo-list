import React from 'react';
import './App.css';
import Todos from './Components/Todos';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
  state = {
    todos: [
      /*
      {
        id: "d99498ec-fde5-4fba-9c7e-d4936a545c6b",
        title: "Clean kitchen",
        isComplete: false,
      },
      {
        id: "9392eae9-3646-4804-90a9-96c5ebbdbde3",
        title: "Sweep living room",
        isComplete: false,
      },
      {
        id: "126a96bb-1c6e-4a49-8f50-cbc39f62b21f",
        title: "Wash clothes",
        isComplete: false,
      },
      */
    ],
  };

  toggleCompleted = (id) => {

    let todoItem = this.state.todos.find((todoItem) => todoItem.id === id);
    todoItem.isComplete = !todoItem.isComplete;

    fetch(`https://virtserver.swaggerhub.com/santiagoserrato/TodoList/1.0.0/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todoItem)
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        todos: this.state.todos.map((todo) => {
          if (todo.id === id) {
            todo.isComplete = !todo.isComplete;
          }
          return todo;
        }),
      });
    })
    .catch(error => {
      console.log(error);
      alert('Unable to update the to-do item on the server; error: ' + error);
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

    fetch("https://virtserver.swaggerhub.com/santiagoserrato/TodoList/1.0.0/todos",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo)
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        todos: [...this.state.todos, newTodo],
      });
    })
    .catch(error => {
      console.log(error);
      alert('Unable to save the to-do item on the server; error: ' + error);
    });
  };

  deleteTodo = (id) => {
    fetch(`https://virtserver.swaggerhub.com/santiagoserrato/TodoList/1.0.0/todos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      this.setState({
        todos: [...this.state.todos.filter((todo) => todo.id !== id)],
      });
    })
    .catch(error => {
      console.log(error);
      alert('Unable to delete the to-do item on the server; error: ' + error);
    });
  };

  componentDidMount() {
    fetch("https://virtserver.swaggerhub.com/santiagoserrato/TodoList/1.0.0/todos")
    .then(response => response.json())
    .then(todoItems => {
      this.setState({
        todos: todoItems
      });
    })
    .catch(error => {
      console.log(error);
      alert('Unable to pull to-do items from the server; error: ' + error);
    });
  }

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
