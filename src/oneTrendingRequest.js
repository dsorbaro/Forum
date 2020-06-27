import React, { Component } from "react";
import "./main.css";
import "./App.css";
import "./trendingcolumns.css"
import "./submitrequestbutton.css"
import { voteRequest } from './actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mediumColumn from "./mediumColumn.png"


class OneTrendingRequest extends Component {
  constructor(props) {
    super(props);
    this.state={requests: null}
  }

  // componentDidMount() {
  //   this.props.fetchRequests()
  // }

  vote = () => {
    this.props.voteRequest(this.props.info._id)
  }

  render() {
    return (
      <div class = "asingleboi">

      <div style={{ display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', alignContent: 'center'}}>
          < p class="person1row" > {this.props.info.person1}</p>
          <p  class="person2row" >{this.props.info.person2}</p>
          <p class= "topicrow" > {this.props.info.topic}</p>
          <p class = "requestnumberrow" > num Requests {this.props.info.numRequests}</p>
          <img class="mediumColumn" src={mediumColumn} />
          <img src={require("./requestbuttonicon.png")} onClick={this.vote} style={{width: '50px', height: '50px'}}/>
      </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { allRequests: state.requests.all };
}

export default withRouter(connect(mapStateToProps, { voteRequest })(OneTrendingRequest));
