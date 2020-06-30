import React, { Component } from "react";
import emailjs from "emailjs-com";
import {
  fetchRequests,
  createRequest,
  fetchPopularRequests,
  getAllCompletedDebates,
} from "../actions";
import axios from "axios";
import "./contact.css";
class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      subj: "",
      info: "",
    };

    //this.changeName = this.changeName.bind(this);
    // this.changeSubj = this.changeSubj.bind(this);
    // this.changeInfo = this.changeInfo.bind(this);
  }

  onNameChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  onSubjChange(event) {
    this.setState({
      subj: event.target.subj,
    });
  }

  onInfoChange(event) {
    this.setState({
      info: event.target.info,
    });
  }

  handleSubmit = () => {
    console.log("calls handleSubmit");
    var content = {
      name: this.state.name,
      subj: this.state.subj,
      info: this.state.info,
    };
    console.log("makes content");
    emailjs
      .send(
        "default_service",
        "template_iBMeLvoi",
        content,
        "user_a0mDXNdkYotfY6VZ2jiIA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    console.log("sends email");
  };

  render() {
    return (
      <div className="ContactPage">
        <p class="hereAtForum">
          Here at Forum, we are committed to serving the people. If you have any
          suggestions for improving our platform, then please do not hesitate to
          reach out to us with your ideas. We value suggestions from every
          member of our community.
        </p>
        <div className="contactName">
          <label class="contactName">Name:</label>
          <input
            type="text"
            className="contactText"
            value={this.state.name}
            onChange={this.onNameChange.bind(this)}
          />
        </div>
        <div className="contactSubj">
          <label class="contactSubj">Subject: </label>
          <input
            type="text"
            className="contactText"
            value={this.state.subj}
            onChange={this.onSubjChange.bind(this)}
          />
        </div>
        <div className="contactInfo">
          <label class="contactInfo">Message:</label>
          <input
            type="text"
            className="contactInfoText"
            value={this.state.message}
            onChange={this.onInfoChange.bind(this)}
          />
        </div>
        <button className="btn btn-primary" onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
}
export default ContactPage;
