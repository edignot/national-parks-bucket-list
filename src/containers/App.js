import React, { Component } from 'react'
import AddTodoForm from './Login'
import ToDoList from './ToDoList'


import Login from './Login'

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Another Todo Box</h1>
        <Login />
        <ToDoList />
      </div>
    );
  }
}

export default App;
