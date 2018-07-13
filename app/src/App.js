import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom"
import _ from "lodash"

import logo from './logo.svg';
import './App.css';

import Login from "./components/users/login"
import Dashboard from "./components/dashboard/dashboard"
import Items from "./components/items/items"
import Categories from "./components/categories/categories"
import Inventory from "./components/inventory/inventory"
import Department from "./components/department/department"

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/items" component={Items} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/inventory" component={Inventory} />
          <Route exact path="/department" component={Department} />
        </main>
      </div>
    )
  }
}

export default App
