import React from 'react';

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {  }
    }
    render() { 
        return ( 
            <form>
                <input type="text"
                 name="todoInput"
                 id={new Date()} />
            </form>
         );
    }
}
 
export default TodoForm;