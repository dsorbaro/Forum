import React, { Component } from 'react';
import './main.css';

class RequestButtons extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div class="innerinfotiles">
        <h4> {this.props.title}</h4>
        <p> {this.props.mainText} </p>
      </div>
    );
  }
}

export default RequestButtons;
