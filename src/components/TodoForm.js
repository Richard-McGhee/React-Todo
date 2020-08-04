import React from 'react';

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            task: ""
        }
    }

    render() { 
        return ( 
            <form>
                <input type="text"
                 name="task"
                 placeholder="Enter New Task"
                 value={this.state.task}
                 onChange={props.onInputChange} />
                <button onSubmit={props.onFormSubmit}>Add To List</button>
            </form>
         );
    }
}
 
export default TodoForm;