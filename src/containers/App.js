import React, { Component } from 'react'
import Login from './Login'

class App extends Component {

  render() {
    return (
      <div className="app-container">
        <h1>National Parks Bucket List</h1>
        <Login />
      </div>
    );
  }
}

export default App;
