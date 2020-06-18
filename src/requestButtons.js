import React, { Component } from "react";
import "./main.css";

class RequestButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bState: "unclicked",
    };
  }

  clickMe = () => {
    this.setState({ bState: "clicked" });
  };

  render() {
    return (
      <div class="innerinfotiles">
        <h4> {this.props.title}</h4>
        <p> {this.props.mainText} </p>
        <p>{this.state.bState}</p>
        <button onClick={this.clickMe}> Click Me!</button>
      </div>
    );
  }
}

export default RequestButtons;
