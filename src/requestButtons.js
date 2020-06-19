import React, { Component } from "react";
import "./main.css";

class RequestButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  clickMe = () => {
    this.setState({ dog: "Oscar" });
  };

  render() {
    return (
      <div class="innerinfotiles">
        <h4> {this.props.title}</h4>
        <p> {this.props.mainText} </p>
        <p>{this.state.dog}</p>
        <button onClick={this.clickMe}> Click Me!</button>
      </div>
    );
  }
}

export default RequestButtons;
