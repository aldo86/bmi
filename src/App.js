import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, NavItem } from 'react-materialize';

import Home from "./Home";
import Login from "./Login";
import SignUp from "./Signup";

import PrivateRoute from "./PrivateRoute";
import app from "./base";

class App extends Component {
  state = { loading: true, authenticated: false, user: null };

  componentWillMount() {
    app.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }

  render(){
    const { authenticated, loading } = this.state;

    if (loading) {
      return <p>Loading..</p>;
    }

    return (
      <Router>
        <div>
          <Navbar brand='BMI' right>
            
              <NavItem><Link to="/login">Login</Link></NavItem>
            
            
              <NavItem><Link to="/signup">Sign Up</Link></NavItem>
            
          </Navbar>
          <PrivateRoute
            exact
            path="/"
            component={Home}
            authenticated={authenticated}
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    )
  }
}

export default App;
