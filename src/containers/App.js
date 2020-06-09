import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, Switch } from 'react-router-dom'
import NotFound from '../components/NotFound'
import Nav from '../components/Nav'
import Login from './Login'
import NPContainer from './NPContainer'
import NPInfo from './NPInfo'
import User from './User'
import Map from './Map'
import Search from './Search'

class App extends Component {
  render() {
    const { user, np } = this.props
    return (
      <section 
        data-testid='app-container'
        className='app-container'
      >
        {!user.userName && <Redirect to="/" />}
        {np.length>0 && <Redirect to="/explore" />}
        <Switch>
          <Route exact path = '/' component={Login}/>

          <Route exact path='/np/:name' component={NPInfo}/>

          <Route exact path = '/explore/search'>
              <Search/>
              <NPContainer filter='search results'/>
          </Route>

          <Route exact path = '/explore'>
              <Search/>
              <NPContainer filter='all parks'/>
          </Route>

          <Route exact path = '/bucketlist'>
              <NPContainer filter='bucket list'/>
          </Route>

          <Route exact path = '/visited'>
              <NPContainer filter='visited'/>
          </Route>

          <Route exact path = '/map'>
              <Map/>
          </Route>

          <Route exact path = '/user'>
              <User/>
          </Route>

          <Route component={NotFound} />
          
        </Switch>
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


