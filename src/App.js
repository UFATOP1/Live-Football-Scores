import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/common/Navbar'
import MatchList from './components/matchlist/MatchList'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="site-wrapper container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/matches/">
            <MatchList />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
