import React, { Component } from "react";
import "./main.css";
import { signupUser } from './actions';
import { connect } from 'react-redux';
import "./signUp.css";
import "./signUp.scss";



class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: '', firstName: '', lastName: '', school: ''};
  }

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }
  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }
  onFirstNameChange = (event) => {
    this.setState({ firstName: event.target.value });
  }
  onLastNameChange = (event) => {
    this.setState({ lastName: event.target.value });
  }
  onSchoolChange = (event) => {
    this.setState({ school: event.target.value });
  }

  signUp = () => {
    console.log(this.state.email)
    console.log(this.state.password)
    console.log(this.state.firstName)
    console.log(this.state.lastName)
    console.log(this.state.school)
    var fields = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      school: this.state.school,
    }
    this.props.signupUser(fields, this.props.history);
  }

  render() {
    return (
<body class = "background">
      <div class="login-wrap">
      	<div class="login-html">
          <h3 class="initialsignuptext">Sign Up</h3>
          <div class="login-form">

              <div class="group">
                <label for="user" class="labelbox">Email</label>
                <input class= "input" id="user" onChange={this.onEmailChange} placeholder="Enter Email" value={this.state.email}/>
              </div>

              <div class="group">
                <label for="pass" class="labelbox">Password</label>
                <input class= "input" onChange={this.onPasswordChange} placeholder="Enter Password" value={this.state.password} />
              </div>

              <div class="group">
              	<label for="pass" class="labelbox">First Name</label>
                <input class= "input" onChange={this.onFirstNameChange} placeholder="Enter First Name" value={this.state.firstName} />
              </div>

              <div class="group">
                <label for="pass" class="labelbox">Last Name</label>
                <input class= "input" onChange={this.onLastNameChange} placeholder="Enter Last name" value={this.state.lastName}/>
              </div>
              <div class="group">
                <label for="pass" class="labelbox">School</label>
                <input class= "input" onChange={this.onSchoolChange} placeholder="Enter School" value={this.state.school}/>
              </div>
              <div>
                <label class="togglelabel"> Would you like to enter the conversation as a Public Figure?</label>
                <input type="checkbox" id="switch" /><label class="willitwork" for="switch">Toggle</label>
                <div class = "toggledescription>">
                <p>If yes, your account will be entered into the pool of users that other users can request discuss topics on the site via video. As a Public Figure, your conversations and conversation forfeits will be noted on your profile.</p>
              </div>
              </div>
              <div>
              <button class = "signupbutton" onClick={this.signUp}> Sign Up </button>

              </div>
            </div>
<div>
</div>

        </div>
      </div>
      </body>

    );
  }
}

export default connect(null, { signupUser })(SignUpPage);
