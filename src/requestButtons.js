import React, { Component } from "react";
import "./main.css";

class RequestButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      text: '',
    };
  }

  onTextChanged = (e) => {
    var items = ["Nancy Pelosi", "Donald Trump", "Dan Crenshaw", "Alexandria Ocasio-Cortez", "Ilhan Omar"];
    const { value } = e.target;

    let data = [];
    if (value!= '' && value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      data = items.sort().filter((v) => regex.test(v));
    }
    this.setState(() => ({ data, text: value }));
  }

  renderData = () => {
    const { data } = this.state;
    console.log(data)
    if(data==null || this.state.text === ''){
      return null;
    }
    else if (data.length === 0 || this.state.text === '') {
      return null;
    }
    return (
      <ul>
        {data.map((item) => <li className="dropDown">{item}</li>)}
      </ul>
    );
  }



  render() {
    return (
      <div class="publicfigurerequestBoxtext">
        <input className="searchBarPublicFigure" placeholder="Request Public Figure..." value={this.state.text} onChange={this.onTextChanged} type="text" />
        {this.renderData()}
      </div>
    );
  }
}

export default RequestButtons;
