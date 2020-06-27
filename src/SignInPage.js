import React, { Component } from "react";
import "./main.css";
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { signinUser } from './actions';

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
      <div class="innerinfotiles" style={{backgroundColor: 'black'}}>
        <p> Sign in here </p>
        <input onChange={this.onEmailChange} placeholder="Enter Email" value={this.state.email}/>
        <input onChange={this.onPasswordChange} placeholder="Enter Password" value={this.state.password} />
        <button onClick={this.signIn}> Sign In </button>
      </div>
    );
  }
}

export default withRouter(connect(null, { signinUser })(SignInPage));
