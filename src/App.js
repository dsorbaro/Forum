import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from "./homepage/Main";
import AboutPage from "./about/about";
import ProfilePage from "./profile/profile";
//import ContactPage from "./contact";
import SignInPage from "./signinsignup/SignInPage";
import SignUpPage from "./signinsignup/SignUpPage";
import ApproveDebators from "./approveDebators/ApproveDebatorsPage";
import CreateDebate from "./debates/createDebate";
import FinalDebate from "./debates/finalDebate";
import Contact from "./contact/contact";

import Faq from "./FAQ/faq";

import Nav from "./nav/Nav";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Nav />
            <div>
              <Route exact path="/" component={Main} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/profile" component={ProfilePage} />
              <Route exact path="/faq" component={Faq} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/createDebate/:id" component={CreateDebate} />\
              <Route exact path="/debate/:id" component={FinalDebate} />
              <Route exact path="/signIn" component={SignInPage} />
              <Route exact path="/signUp" component={SignUpPage} />
              <Route
                exact
                path="/approveDebators"
                component={ApproveDebators}
              />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
