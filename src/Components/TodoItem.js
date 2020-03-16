import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
    render() {
        return (
            <li class="list-group-item clearfix">

                <div class="form-check pt-2 pb-2 float-left">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label class="form-check-label" for="defaultCheck1">
                    {this.props.todo.title}
                </label>
                </div>

                <button class="btn btn-danger float-right">Delete</button>
            </li>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem;