import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component {
    render() {
        return (
            <div class="container">
                <h1>Todo List</h1>
                
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Add todos here..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
                    </div>
                </div>

                <ul class="list-group">
                    {this.props.todos.map((todo) => (<TodoItem key={todo.id} todo={todo} />))}
                </ul>
            </div>
        );
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;