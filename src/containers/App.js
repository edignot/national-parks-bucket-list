import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import NotFound from '../components/NotFound'
import Nav from '../components/Nav'
import Login from './Login'
import NPContainer from './NPContainer'
import NPInfo from './NPInfo'
import User from './User'
import Map from './Map'
import Search from './Search'
import ExploreContainer from './ExploreContainer'

class App extends Component {
  render() {
    const { user, np } = this.props
    return (
      <section className="app-container">
        {!user.userName && <Redirect to="/login" />}
        {np.length>0 && <Redirect to="/explore" />}
        <Switch>
          <Route exact path = '/login' component={Login}/>

          <Route exact path = '/explore'>
              <Search/>
              <NPContainer/>
          </Route>

          <Route exact path = '/np'>
              <NPContainer/>
          </Route>

          <Route exact path = '/bucketlist'>
              <NPContainer/>
          </Route>

          <Route exact path = '/visited'>
              <NPContainer/>
          </Route>

          <Route exact path = '/map'>
              <Map/>
          </Route>

          <Route exact path = '/user'>
              <User/>
          </Route>

          <Route path='/np/:name' component={NPInfo}/>

          <Route component={NotFound} />
          j
        </Switch>
        {/* CHANGE TO LOADING CONDITION FOR NAV */}
        {np.length>0 && <Nav/>}
      </section>
    )
  } 
}

export const mapState = state => ({
  user: state.user,
  np: state.np
})

export default connect(mapState)(App)
