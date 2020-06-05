import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import Login from './Login'
import NotFound from '../components/NotFound'
import NPContainer from './NPContainer'
import Nav from '../components/Nav'
import User from './User'
import Map from './Map'
import ExploreContainer from './ExploreContainer'

class App extends Component {
  render() {
    const { user, np } = this.props
    return (
      <section className="app-container">
        <h1>National Parks Bucket List</h1>

        {!user.userName && <Redirect to="/login" />}
        {np.length>0 && <Redirect to="/" />}

        <Switch>
          <Route exact path = '/login' component={Login}/>
          <Route exact path = '/'>
              <NPContainer/>
          </Route>
          <Route path = '/explore'>
              <ExploreContainer/>
          </Route>
          <Route path = '/np'>
              <NPContainer/>
          </Route>
          <Route path = '/bucketlist'>
              <NPContainer/>
          </Route>
          <Route path = '/visited'>
              <NPContainer/>
          </Route>
          <Route path = '/map'>
              <Map/>
          </Route>
          <Route path = '/user'>
              <User/>
          </Route>
          <Route component={NotFound} />
        </Switch>
        <Nav/>
      </section>
    )
  } 
}

export const mapStateToProps = state => ({
  user: state.user,
  np: state.np
})

export default connect(mapStateToProps)(withRouter(App));
