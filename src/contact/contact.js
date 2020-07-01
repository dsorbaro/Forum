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
    var content = {
      name: this.state.name,
      subj: this.state.subj,
      info: this.state.info,
    };
    // emailjs
    //   .send(
    //     "default_service",
    //     "template_iBMeLvoi",
    //     content,
    //     "user_a0mDXNdkYotfY6VZ2jiIA"
    //   );
  };

  render() {
    return (
      <div class="ContactPage">
        <p class="contactUs">Contact Us</p>

        <div></div>
        <textarea
          type="text"
          class="contactName"
          value={this.state.name}
          onChange={this.onNameChange.bind(this)}
          rows="1"
          placeholder="Name"
        />
        <div></div>
        <textarea
          type="text"
          class="contactSubj"
          value={this.state.subj}
          onChange={this.onSubjChange.bind(this)}
          rows="1"
          placeholder="Subject"
        />

        <textarea
          type="text"
          class="contactInfo"
          value={this.state.message}
          onChange={this.onInfoChange.bind(this)}
          rows="10"
          placeholder="Write your thoughts here"
        ></textarea>

        <button className="btn" onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
}
export default ContactPage;
