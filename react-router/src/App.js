import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Nav from "./Nav";
import About from "./About";
import Users from "./Users";
import Home from "./Home";
import UsersDetail from "./UsersDetail";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/users" exact component={Users} />
          <Route path="/users/:id" component={UsersDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
