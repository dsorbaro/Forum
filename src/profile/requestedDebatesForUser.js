import React, { Component } from "react";
import { getPendingDebatesForUser,editDebateStatus } from '../actions';
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
        this.props.getPendingDebatesForUser({email: this.props.email})
      }
    }

    approve = (item) => {
       console.log(item);
        const fields = {
          email: this.props.email,
          status: "ACCEPTED"
        }
         this.props.editDebateStatus(item._id, fields)
    }

    reject = (item) => {
      const fields = {
        email: this.props.email,
        status: "REJECTED"
      }
       this.props.editDebateStatus(item._id, fields)
    }
   render() {
     console.log(this.props.requestedDebatesForUser)
     var debateRequests = this.props.requestedDebatesForUser == null ? <p> No one wants to debate you :( </p> : (
       Object.keys(this.props.requestedDebatesForUser).map((item)=> {
         console.log(this.props.requestedDebatesForUser[item])
         return (

          <div class= "asinglerequest">
          <div>


                      <button class ="acceptbutton" onClick={() => {this.approve(this.props.requestedDebatesForUser[item])}}>   <h1 class = "interioracceptbuttontext">Accept</h1> </button>
                      <button class ="forfeitbutton" onClick={() => {this.reject(this.props.requestedDebatesForUser[item])}}> <h1 class = "interiorforfeitbuttontext">Forfeit</h1> </button>

          <div>
          <div class = "iconrow">
            <img class = "personprofileicon" src={personprofileicon} />
            <p class = "currentrequestspf">{this.props.requestedDebatesForUser[item].requestID.person1ID.firstName} </p>
          </div>
              <div class = "iconrow">
              <img class = "newsprofileicon" src={newsprofileicon} />
            <p class = "currentrequeststopic">{this.props.requestedDebatesForUser[item].requestID.topic} </p>
            </div>

            <div class = "iconrow">
                <img class = "personprofileicontwo" src={personprofileicon} />
                <p class = "currentrequestspf"> {this.props.requestedDebatesForUser[item].requestID.person2ID.firstName} </p>
            </div>
            <p class = "currentrequestsnumber"> Number of Requests: {this.props.requestedDebatesForUser[item].requestID.numRequests} </p>


            <div class ="borderline">
            </div>
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

 export default withRouter(connect(mapStateToProps, { getPendingDebatesForUser, editDebateStatus })(RequestedDebatesForUser));
