import React from 'react';
import './App.css';
import Todos from './Components/Todos';

class App extends React.Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Clean kitchen',
        completed: false
      },
      {
        id: 2,
        title: 'Sweep living room',
        completed: false
      },
      {
        id: 3,
        title: 'Wash clothes',
        completed: false
      }
    ]
  }

  toggleCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  addTodo = (newTitle) => {
    if (newTitle === ''){
      return;
    }

    const newTodo = {
      id: this.state.todos.length + 1,
      title: newTitle,
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} toggleCompleted={this.toggleCompleted} addTodo={this.addTodo} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
