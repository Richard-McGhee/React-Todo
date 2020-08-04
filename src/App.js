import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      allTasks: []
    }
  }

  addTask = newTaskName => {
    const newTask = {
      task: newTaskName,
      id: new Date(),
      completed: false
    }
    this.setState({
      allTasks: [...this.state.allTasks, newTask]
    })
    console.log(this.state.allTasks)
  }
  
  toggleItem = id => {
    this.setState({
      allTasks: this.state.allTasks.map(item => {
        if(item.id === id) {
          return {
            ...item,
            completed: !item.completed
          }
        }else {
          return item
        }
      })
    })
  }

  render() {
    return (
      <div>
        <TodoForm addTask={this.addTask} />
        <TodoList allTasks={this.state.allTasks} toggleItem={this.toggleItem} />
      </div>
    );
  }
}

export default App;
