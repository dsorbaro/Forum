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
          <button class={this.props.bclass} onClick={this.props.emailFunctionVariable}>
            <img src={require("./requestbuttonicon.png")} class="buttonicon"/>
          </button>
        </div>
    );
  }
}


export default SubmitRequestbutton;
