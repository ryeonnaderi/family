import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import welcome  from "./pages/welcome";
import login from "./pages/login";
import signUp from "./pages/signup";

export default() => (
  <Router>
    <div>
      <Route exact path= "/" Component = {welcome}/>
      <Route exact path="/login" Component = {login}/>
      <Route exact path="/signup" Component = {signUp}/>
      </div>
  </Router>
)

