import React from 'react';

class AddTodo extends React.Component {

    state = {
        newTodo: null
    }

    storeNewTodo = (event) => {

        this.setState({
            newTodo: {
                id: this.props.nextId,
                title: event.target.value,
                completed: false
            }
        });
    }

    render() {

        return (
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Add todos here..." aria-label="Recipient's username" aria-describedby="button-addon2" onChange={this.storeNewTodo} />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.props.addTodo.bind(this, this.state.newTodo)}>Add</button>
                </div>
            </div>
        );
    }
}


export default AddTodo;