import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component {

    render() {
        return (
            <div className="container">
                <h1>Todo List</h1>
                
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Add todos here..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
                    </div>
                </div>

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