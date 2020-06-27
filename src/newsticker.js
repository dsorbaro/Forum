import React, { Component } from "react";
import "./NewsTicker.scss";
import { fetchRequests } from './actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class NewsTicker extends Component {
  constructor(props) {
    super(props);
    this.state={}
  }

  // componentDidMount() {
  //   this.props.fetchRequests()
  // }

  // setRequests = (requests) => {
  //   this.setState({requests: requests})
  // }

  render() {
    var tickers = this.props.allRequests == null ? null : (
      Object.keys(this.props.allRequests).map((item)=> {
      //  console.log(this.props.allRequests[item])
        return (
          <div class="ticker__item">{this.props.allRequests[item].person1 + " is requested to debate " + this.props.allRequests[item].person2 + " on " + this.props.allRequests[item].topic}</div>

        )
      })
    )

    console.log(this.props.allRequests)

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


function mapStateToProps(state) {
  return { allRequests: state.requests.all };
}

export default withRouter(connect(mapStateToProps, { fetchRequests })(NewsTicker));
