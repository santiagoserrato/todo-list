import React from 'react';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


class Todos extends React.Component {

    render() {
        return (
            <div className="container">
                <h1>Todo List</h1>
                
                <AddTodo addTodo={this.props.addTodo} nextId={this.props.todos.length+1} />

                <ul className="list-group">
                    {this.props.todos.map((todo) => (<TodoItem key={todo.id} todo={todo} toggleCompleted={this.props.toggleCompleted} />))}
                </ul>
            </div>
        );
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;