import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from "./Main";
import AboutPage from "./about";
import ContactPage from "./contact";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";
import Nav from "./Nav"


class App extends Component {
  render() {
    return (
      <Router>
<div class="navbardesign">
        <div>
          <Nav />
          <div>
            <Route exact path="/" component={Main} />

            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/signIn" component={SignInPage} />
            <Route exact path="/signUp" component={SignUpPage} />

          </div>
        </div>
</div>
      </Router>
    );
  }
}

export default App;
