import React, { Component } from "react";
import "./NewsTicker.scss";
import * as db from './datastore.js';

class NewsTicker extends Component {
  constructor(props) {
    super(props);
    this.state={requests: null}
  }

  componentDidMount() {
    db.fetchRequests(this.setRequests)
  }

  setRequests = (requests) => {
    this.setState({requests: requests})

  }

  render() {
    var tickers = this.state.requests == null ? null : (
      Object.keys(this.state.requests).map((item)=> {
        return (
          <div class="ticker__item">{this.state.requests[item].request}</div>

        )
      })
    )

    return (
      <div class = "tickindex">
      <div class="ticker-wrap">
      <div class="ticker">
        {tickers}
      </div>
      </div>
      </div>


    );
  }
}


export default NewsTicker;
