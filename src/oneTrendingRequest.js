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
    if(this.props.email !=null){
      var email = {
        email: this.props.email,
      }
      this.props.voteRequest(this.props.info._id, email)

    }
  }

  render() {
    console.log(this.props.info.requestUsers);
    var requestedAlready = false;
    for(var i = 0; i < this.props.info.requestUsers.length; i++){
      if(this.props.info.requestUsers[i].email === this.props.email){
        requestedAlready = true;
      }
    }



    var vote = null;
    if(this.props.email == null){
      vote= <p> You need to log in to vote </p>
    }
    else if(requestedAlready){
      vote= <p> You have already voted for this request </p>
    }
    else {
      vote= <img src={require("./requestbuttonicon.png")} onClick={this.vote} style={{width: '50px', height: '50px'}}/>
    }


    return (
      <div style={{ display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', alignContent: 'center'}}>
          < p style={{fontSize: '10px'}}> {this.props.info.person1}</p>
          <p style={{fontSize: '10px'}} >{this.props.info.person2}</p>
          <p style={{fontSize: '10px'}} > {this.props.info.topic}</p>
          <p style={{fontSize: '10px'}} > num Requests {this.props.info.numRequests}</p>
          <img style={{width: '75px', height: '200px'}} src={mediumColumn} />
          {vote}
     </div>
    );
  }
}


function mapStateToProps(state) {
  return { allRequests: state.requests.all, email: state.auth.email };
}

export default withRouter(connect(mapStateToProps, { voteRequest })(OneTrendingRequest));
