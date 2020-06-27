import React, { Component } from "react";
import "./main.css";
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { signinUser } from './actions';
import "./signUp.css";
import forumCircletwo from "./forumCircletwo.png"

class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }
  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  signIn = () => {
    const fields = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.signinUser(fields, this.props.history)
  }


  render() {
    return (


      <div>
        <img class="signinbckground" src={forumCircletwo} />
         <div class="signin-wrap">
             <div class="login-html">
                 <h3 class="initialsignuptext">Sign In</h3>
                 <div class="login-form">
                    <div>
                        <div class="group">
                          <label for="user" class="labelbox">Email</label>
                          <input class= "input" onChange={this.onEmailChange} placeholder="Enter Email" value={this.state.email} />
                        </div>
                        <div class="group">
                            <label for="pass" class="labelbox">Password</label>
                            <input class= "input" onChange={this.onPasswordChange} placeholder="Enter Password" value={this.state.password} />
                        </div>
                        <div>
                          <button class = "signupbutton" onClick={this.signIn}> Sign In </button>
                        </div>
                    </div>
              </div>
        </div>
      </div>
      </div>
    );
  }
}












export default withRouter(connect(null, { signinUser })(SignInPage));
