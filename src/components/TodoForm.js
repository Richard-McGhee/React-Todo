import React from 'react';

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            task: ""
        }
    }

    onInputChange = evt => {
        this.setState({
            task: evt.target.value
        })
    }
    onFormSubmit = evt => {
        evt.preventDefault()
        this.props.addTask(this.state.task)
        this.setState({
            task: ""
        })
    }

    render() { 
        return ( 
            <form>
                <input type="text"
                 name="task"
                 placeholder="Enter New Task"
                 value={this.state.task}
                 onChange={this.onInputChange} />
                <button onSubmit={this.onFormSubmit}>Add To List</button>
            </form>
         );
    }
}
 
export default TodoForm;