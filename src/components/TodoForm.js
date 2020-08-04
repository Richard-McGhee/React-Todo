import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
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
        if(this.state.task !== ""){
          evt.preventDefault()
          this.props.addTask(this.state.task)
          this.setState({
            task: ""
          })
        }else{
          evt.preventDefault()
          alert("Task cannot be empty")
        }
      }

    render() { 
        return ( 
            <form onSubmit={this.onFormSubmit}>
                <input type="text"
                 name="task"
                 placeholder="Enter New Task"
                 value={this.state.task}
                 onChange={this.onInputChange} />
                <button>Add To List</button>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </form>
         );
    }
}
 
export default TodoForm;