import React, { Component } from 'react'
import Login from './Login'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router';

class App extends Component {
  render() {
    const { user } = this.props
    return (
      <section className="app-container">
        <h1>National Parks Bucket List</h1>
        <Route exact path = '/' component={Login}/>
      </section>
    );
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps,null)(withRouter(App));
