import React, { Component } from "react";
import { getUserFromEmail, getUsersRequestedDebates } from '../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';import "./profile.css"
import RequestedDebatesForUser from "./requestedDebatesForUser"
import profilecolumn from './profilecolumn.png'
class ProfilePage extends Component {
  constructor(props) {
    super(props);
        this.state = {varNoInfo: true};
    }

    componentDidMount(){
      if(this.props.email!=null){
        this.props.getUserFromEmail({email: this.props.email});
  //      this.props.getUsersRequestedDebates({email: this.props.email})
      }
    }

   render() {
     if(this.props.fields == null){
       return (<p> Loading</p>)
     }

     var status = null;
     if(this.props.fields.status === "PENDING"){
       status = <p> Status: You are pending approval to be a debator </p>
     }
     else if (this.props.fields.status === "APPROVED"){
       status = (
         <div>
         <p> Status: You are an approved debator </p>
         <RequestedDebatesForUser />
         </div>
       )
     }
     else if (this.props.fields.status === "REJECTED"){
       status = (
         <p> Status: Sadly, you have been rejected as a debator </p>
       )
     }
     return (
       <div>
          <div class = "profileinfoformat">
          <p class = "profilename">{this.props.fields.firstName} {this.props.fields.lastName}</p>
          <p class = "profileschool"> {this.props.fields.school} </p>
          <div class = "profilestatus"> {status} </div>
          <p class= "profilebio"> {this.props.fields.bio} </p>
              <div class = "toptextrow">
                <div class = "participatedtoptext">Past Debates</div>
                <div class = "currentrequeststoptext">Current Requests</div>
                <div class = "forfeitstoptext">Forfeited Debates</div>
              </div>
      </div>


       </div>
     );
   }
 }
 function mapStateToProps(state) {
   return { fields: state.auth.fields, email:state.auth.email };
 }

 export default withRouter(connect(mapStateToProps, { getUserFromEmail, getUsersRequestedDebates })(ProfilePage));
