
import React, { Component } from "react";
import "./profile.css"
import newsprofileicon from "./newsprofileicon.png"
import personprofileicon from "./personprofileicon.png"
import { withRouter } from 'react-router-dom';
import { getRejectedDebatesForUser,editDebateStatus } from '../actions';
import { connect } from 'react-redux';


class PastDebatespage extends Component {
  constructor(props) {
    super(props);
        this.state = {};
    }

    componentDidMount() {
      if(this.props.email!=null){
        this.props.getRejectedDebatesForUser({email: this.props.email})
      }
    }
   render() {
     var debateRequests = this.props.rejectedDebatesForUser == null ? <p class = "nocurrentrequeststext">No current debate requests</p> : (
       Object.keys(this.props.rejectedDebatesForUser).map((item)=> {
         console.log(this.props.rejectedDebatesForUser[item])
         return (
          <div class= "asinglerequest">
          <div class ="borderline">
          </div>
          <div>
          <div class = "iconrow">
            <img class = "personprofileicon" src={personprofileicon} />
            <p class = "currentrequestspf">{this.props.rejectedDebatesForUser[item].requestID.person1ID.firstName} </p>
          </div>
              <div class = "iconrow">
              <img class = "newsprofileicon" src={newsprofileicon} />
            <p class = "currentrequeststopic">{this.props.rejectedDebatesForUser[item].requestID.topic} </p>
            </div>

            <div class = "iconrow">
                <img class = "personprofileicontwo" src={personprofileicon} />
                <p class = "currentrequestspf"> {this.props.rejectedDebatesForUser[item].requestID.person2ID.firstName} </p>
            </div>
            <p class = "currentrequestsnumber"> Number of Requests: {this.props.rejectedDebatesForUser[item].requestID.numRequests} </p>
            <div class ="borderline">
            </div>
          </div>
          </div>

         )
       })
     )
     return (
      <div>


      {debateRequests}
      </div>
     );
 }
}


function mapStateToProps(state) {
  return { email:state.auth.email, rejectedDebatesForUser: state.auth.rejectedDebatesForUser  };
}

export default withRouter(connect(mapStateToProps, { getRejectedDebatesForUser, editDebateStatus })(PastDebatespage));
