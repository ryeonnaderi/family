import React from "react";
import Welcome from "./pages/Welcome";
import Login from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import{BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import "./App.css";
import fakeAuth from "./components/Authentication"


const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
    ? <Component {...props}/>
    : <Redirect to="/login"/>
  )}/>
)

const App =() =>(
    <Router>
      <div>
        <Switch>
      <Route exact path = "/" component={Welcome}/>
      <Route exact path = "/login" component={Login}/>
      <Route exact path = "/signup" component={SignUp}/>
      
      
      </Switch>

  </div>
    </Router>
);
  
export default App;
