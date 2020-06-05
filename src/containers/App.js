import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, Switch } from 'react-router-dom'
import { withRouter } from 'react-router';
import Login from './Login'
import NotFound from '../components/NotFound'

class App extends Component {
  render() {
    const { user } = this.props
    return (
      <section className="app-container">
        <h1>National Parks Bucket List</h1>

        {!user.username && <Redirect to="/" />}

        <Switch>
          <Route exact path = '/' component={Login}/>
          <Route component={NotFound} />
        </Switch>

      </section>
    );
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps,null)(withRouter(App));
