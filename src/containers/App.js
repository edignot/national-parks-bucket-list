import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, Switch } from 'react-router-dom'
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'
import Login from './Login'
import NotFound from '../components/NotFound'
import NPContainer from './NPContainer'
import Nav from '../components/Nav'

class App extends Component {
  render() {
    const { user } = this.props
    return (
      <section className="app-container">
        <h1>National Parks Bucket List</h1>

        {!user.username && <Redirect to="/login" />}

        <Switch>
          <Route exact path = '/login' component={Login}/>

          <Route exact path = '/'>
              <NPContainer/>
              <Nav/>
          </Route>

          <Route component={NotFound} />
        </Switch>

      </section>
    )
  } 
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, null)(withRouter(App));
