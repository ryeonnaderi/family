import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import welcome  from "./pages/welcome";
import login from "./pages/login";
import signUp from "./pages/signup";
import authenticate from "../Component/authenticate"
import forgotPassword from "./pages/forgotPassword";
const PrivateRoute = ({Component: Component, ...rest}) =>(
  <Route {... rest} render = {(props)=>(
    authenticate.isAuthenticated ===true
    ?<Component {...props}/>
    :<Redirect to="/login"/>
  )}/>
)

const app = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path= "/" Component = {welcome}/>
        <Route exact path="/login" Component = {login}/>
        <Route exact path="/signup" Component = {signUp}/>
        <Route ecact path="/forgotPassword" component = {forgotPassword}/>
        {/* path once signed in */}
        
      </Switch>

      </div>
  </Router>
)

export default app;
