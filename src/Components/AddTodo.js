import React from 'react';

class AddTodo extends React.Component {

    state = {
        title: ''
    }

    handleChange = (event) => {
        this.setState({
            title: event.target.value
        });
    }

    handleClick = () => {
        this.handleSubmit();
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.handleSubmit();
        }
    }

    handleSubmit = () => {
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return (
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Add new item here..." 
                    aria-label="Recipient's username" 
                    aria-describedby="button-addon2" 
                    onChange={this.handleChange} 
                    onKeyPress={this.handleKeyPress}
                    value={this.state.title} 
                />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.handleClick}>Add</button>
                </div>
            </div>
        );
    }
}


export default AddTodo;