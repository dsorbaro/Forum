import React, { Component } from "react";
import "./profile.css"

import newsprofileicon from "./newsprofileicon.png"
import personprofileicon from "./personprofileicon.png"
import { withRouter } from 'react-router-dom';
import { getActiveDebatesForUser } from '../actions';
import { connect } from 'react-redux';


class ActiveDebatespage extends Component {
  constructor(props) {
    super(props);
        this.state = {};
    }

    componentDidMount() {
      if(this.props.email!=null){
        this.props.getActiveDebatesForUser({email: this.props.email})
      }
    }

   render() {
     var debateRequests = this.props.activeDebatesForUser == null ? <p> No one wants to debate you :( </p> : (
       Object.keys(this.props.activeDebatesForUser).map((item)=> {
         console.log(this.props.activeDebatesForUser[item])
         return (
          <div class= "asinglerequest">
          <div class ="borderline">
          </div>
          <div>
          <div class = "iconrow">
            <img class = "personprofileicon" src={personprofileicon} />
            <p class = "currentrequestspf">{this.props.activeDebatesForUser[item].requestID.person1ID.firstName} </p>
          </div>
              <div class = "iconrow">
              <img class = "newsprofileicon" src={newsprofileicon} />
            <p class = "currentrequeststopic">{this.props.activeDebatesForUser[item].requestID.topic} </p>
            </div>

            <div class = "iconrow">
                <img class = "personprofileicontwo" src={personprofileicon} />
                <p class = "currentrequestspf"> {this.props.activeDebatesForUser[item].requestID.person2ID.firstName} </p>
            </div>
            <p class = "currentrequestsnumber"> Number of Requests: {this.props.activeDebatesForUser[item].requestID.numRequests} </p>
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
   return { email:state.auth.email, activeDebatesForUser: state.auth.activeDebatesForUser  };
 }

 export default withRouter(connect(mapStateToProps, { getActiveDebatesForUser })(ActiveDebatespage));
