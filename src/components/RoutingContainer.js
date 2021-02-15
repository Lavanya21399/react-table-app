import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from "../components/pages/Login"
import Table from '../components/Table/Table'
import Error from '../components/pages/Error'

export default class App extends Component {
  render() {
    return (
      <div>


        <Router>
          <Switch>


            <Route path="/" component={Login} exact />
            <Route path="/table" component={Table} exact />
            <Route path = "*" exact  component={Error}/>
     

          </Switch>

        </Router>

      </div>

    )
  }
}