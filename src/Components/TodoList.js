
import React from 'react';

class TodoList extends React.Component {

    render() {
        const appName = 'Todo List';
        return (
            <div>
                <h1>{appName}</h1>
                <ul>
                    <li>Clean Kitchen</li>
                    <li>Sweep Floor</li>
                </ul>
            </div>
        );
    }
}

export default TodoList;