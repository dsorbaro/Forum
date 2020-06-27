import React, { Component } from "react";
import "./main.css";
import "./App.css";
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
      <div style={{ display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', alignContent: 'center'}}>
          < p style={{fontSize: '10px'}}> {this.props.info.person1}</p>
          <p style={{fontSize: '10px'}} >{this.props.info.person2}</p>
          <p style={{fontSize: '10px'}} > {this.props.info.topic}</p>
          <p style={{fontSize: '10px'}} > num Requests {this.props.info.numRequests}</p>
          <img style={{width: '75px', height: '200px'}} src={mediumColumn} />
          <img src={require("./requestbuttonicon.png")} onClick={this.vote} style={{width: '50px', height: '50px'}}/>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { allRequests: state.requests.all };
}

export default withRouter(connect(mapStateToProps, { voteRequest })(OneTrendingRequest));
