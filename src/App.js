import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from "./Main";
import AboutPage from "./about";
import ContactPage from "./contact";

const MainMenu = () => {
  return (
    <div>
      <Link to="/">
        <button>home</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/contact">
        <button>contact</button>
      </Link>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <MainMenu />
          <div>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/contact" component={ContactPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
