import React, { Component } from "react";
import { signupUser } from './actions';
import { connect } from 'react-redux';


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
      <div class="innerinfotiles" style = {{backgroundColor: 'black'}}>
        <p>Signup here</p>
        <input onChange={this.onEmailChange} placeholder="Enter Email" value={this.state.email}/>
        <input onChange={this.onPasswordChange} placeholder="Enter Password" value={this.state.password} />
        <input onChange={this.onFirstNameChange} placeholder="Enter FirstName" value={this.state.firstName} />
        <input onChange={this.onLastNameChange} placeholder="Enter Last name" value={this.state.lastName}/>
        <input onChange={this.onSchoolChange} placeholder="Enter School" value={this.state.school}/>
        <button onClick={this.signUp}> Sign Up </button>
      </div>
    );
  }
}

export default connect(null, { signupUser })(SignUpPage);
