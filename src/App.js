import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = []
  }

  addTask = newTaskName => {
    const newTask = {
      task: newTaskName,
      id: new Date(),
      completed: false
    }
    this.setState([...this.state, newTask])
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
      <div>
        <TodoForm onInputChange={this.onInputChange} onFormSubmit={this.onFormSubmit} />
        <TodoList />
      </div>
    );
  }
}

export default App;
