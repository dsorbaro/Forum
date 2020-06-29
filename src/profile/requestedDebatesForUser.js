import React, { Component } from "react";
import { getUsersRequestedDebates } from '../actions';
import { connect } from 'react-redux';
import "./profile.css"
import newsprofileicon from "./newsprofileicon.png"
import personprofileicon from "./personprofileicon.png"

import { withRouter } from 'react-router-dom';


class RequestedDebatesForUser extends Component {
  constructor(props) {
    super(props);
        this.state = {};
    }

    componentDidMount() {
      if(this.props.email!=null){
        this.props.getUsersRequestedDebates({email: this.props.email})
      }
    }

   render() {
  //   console.log(this.props.requestedDebatesForUser)
     var debateRequests = this.props.requestedDebatesForUser == null ? <p> No one wants to debate you :( </p> : (
       Object.keys(this.props.requestedDebatesForUser).map((item)=> {
       //  console.log(this.props.allRequests[item])
         return (
          <div class= "asinglerequest">
          <div class ="borderline">
          </div>
          <div>
          <div class = "iconrow">
            <img class = "personprofileicon" src={personprofileicon} />
            <p class = "currentrequestspf">{this.props.requestedDebatesForUser[item].person1} </p>
          </div>
              <div class = "iconrow">
              <img class = "newsprofileicon" src={newsprofileicon} />
            <p class = "currentrequeststopic">{this.props.requestedDebatesForUser[item].topic} </p>
            </div>

            <div class = "iconrow">
                <img class = "personprofileicontwo" src={personprofileicon} />
                <p class = "currentrequestspf"> {this.props.requestedDebatesForUser[item].person2} </p>
            </div>
            <p class = "currentrequestsnumber"> Number of Requests: {this.props.requestedDebatesForUser[item].numRequests} </p>
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
   return { email:state.auth.email, requestedDebatesForUser: state.auth.requestedDebatesForUser  };
 }

 export default withRouter(connect(mapStateToProps, { getUsersRequestedDebates })(RequestedDebatesForUser));
