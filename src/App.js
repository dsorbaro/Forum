import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from "./Main";
import AboutPage from "./about";
import FindyourNewsroomSearch from "./FindyourNewsroomSearch";
import ContactPage from "./contact";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";
import logo from "./forumCircle.png";

const MainMenu = () => {
  return (

<div>
<div>
<div class="row">
            <img class="mainForumlogo" src={logo} />
  <div class="forumaboveLine">
          <div class="mainForumtext"><h1>INTRVIEW</h1></div>
          <div class="logoline"></div>
  </div>
</div>
</div>
    <div class= "navbarRow">
            <Link to="/about">
                  <button class = "aboutnavbarbutton">About</button>
            </Link>

            <Link to="/contact">
              <button class = "navbarbutton">Contact</button>
            </Link>
            <div class ="newsroomsearchbar">
          <FindyourNewsroomSearch
          />
          </div>
            <Link to="/SignInPage">
              <button class = "signinbutton">Sign In</button>
            </Link>

            <Link to="/SignUpPage">
              <button class = "signupbutton">Sign Up</button>
            </Link>
          </div>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <Router>
<div class="navbardesign">
        <div>
          <MainMenu />
          <div>
            <Route exact path="/" component={Main} />

            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/contact" component={ContactPage} />
          </div>
        </div>
</div>
      </Router>
    );
  }
}

export default App;
