import React, { Component } from "react";
import "./submitrequestbutton.css";
import "./requestbuttonicon.png";

class SubmitRequestbutton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div class="wrap">
          <button class="button">
            <img src={require("./requestbuttonicon.png")} class="buttonicon"/>
          </button>
        </div>
    );
  }
}


export default SubmitRequestbutton;
