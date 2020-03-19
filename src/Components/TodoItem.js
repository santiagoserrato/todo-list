import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {

    todoDisabled = () => {
        return this.props.todo.completed ? 'list-group-item-light' : '';
    }

    render() {

        return (
            <div className={`list-group-item list-group-item-action clearfix ${this.todoDisabled()}`}>
                <div className="form-check pt-2 pb-2 float-left">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" onChange={this.props.toggleCompleted.bind(this, this.props.todo.id)} />
                <label className="form-check-label">
                    {this.props.todo.title}
                </label>
                </div>
                
                <button className="btn btn-danger float-right" onClick={this.props.deleteTodo.bind(this, this.props.todo.id)}>Delete</button>
            </div>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem;