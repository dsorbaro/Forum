import React, { Component } from "react";
import "./main.css";
import "./App.css";
import "./trendingcolumns.css"
import "./submitrequestbutton.css"
import { voteRequest } from './actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mediumColumn from "./mediumColumn.png"
import profileicontrend from "./profileicontrend.png"
import newstrendicon from "./newstrendicon.png"


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
      <div class = "putinrowcap">
      <div class = "icons">
        <img class="profileicontrendone" src={profileicontrend} />
          <img class="newstrendicon" src={newstrendicon} />
          <img class="profileicontrendtwo" src={profileicontrend} />
      </div>

        <div class = "textabovecolumn">
            <p class="person1row" > {this.props.info.person1}</p>
            <p class= "topicrow" > {this.props.info.topic}</p>
            <p  class="person2row" >{this.props.info.person2}</p>
        </div>
        </div>
        <img class="mediumColumn" src={mediumColumn} />
             <div class = "textabovecolumn">
                  <p class = "requestnumberrow" >Requests {this.props.info.numRequests}</p>
             </div>
             <img src={require("./requestbuttonicon.png")} onClick={this.vote} style={{width: '50px', height: '50px'}}/>

      </div>
    );
  }
}


function mapStateToProps(state) {
  return { allRequests: state.requests.all };
}

export default withRouter(connect(mapStateToProps, { voteRequest })(OneTrendingRequest));
