import React, { Component } from "react";
import { getUserFromEmail, getActiveDebatesForUser,getRejectedDebatesForUser, getPendingDebatesForUser,getCompletedDebatesForUser } from '../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';import "./profile.css"
import RequestedDebatesForUser from "./requestedDebatesForUser"
import ActiveDebatespage from "./ActiveDebatespage.js"
import parthenonprofile from './parthenonprofile.png'
import cliffline from "./cliffline.png"
import informationicon from "./informationicon.png"
import PastDebatespage from './PastDebatespage.js'
import CurrentRequestspage from './CurrentRequestspage.js'
import ForfeitedDebatespage from './ForfeitedDebatespage.js'
class ProfilePage extends Component {
  constructor(props) {
    super(props);
        this.state = {varNoInfo: true, PastDebatespage: true, CurrentRequestspage: false, ForfeitedDebatespage:false, ActiveDebatespage: false};
    }

    componentDidMount(){
      if(this.props.email!=null){
        this.props.getUserFromEmail({email: this.props.email});
        this.props.getActiveDebatesForUser({email: this.props.email})
        this.props.getRejectedDebatesForUser({email: this.props.email})
        this.props.getCompletedDebatesForUser({email: this.props.email})
        this.props.getPendingDebatesForUser({email: this.props.email})
      }
    }

// <button class = "" onClick= ({this.state.PastDebatespage}  === true)>
    pastDebatespage = () => {
      this.setState({PastDebatespage: true, CurrentRequestspage: false, ForfeitedDebatespage:false, ActiveDebatespage:false})
    }

    currentRequestspage = () => {
      this.setState({CurrentRequestspage: true, PastDebatespage: false, ForfeitedDebatespage:false, ActiveDebatespage:false})
    }

    forfeitedDebatespage = () => {
      this.setState({ForfeitedDebatespage: true, PastDebatespage: false, CurrentRequestspage: false, ActiveDebatespage:false})
    }
    activeDebatespage = () => {
      this.setState ({ActiveDebatespage:true, CurrentRequestspage: false, ForfeitedDebatespage:false, PastDebatespage:false})
    }





   render() {
     if(this.props.fields == null){
       return (<p> Loading</p>)
     }

   var profileOption = null;
    if(this.state.PastDebatespage === true)
     {
       profileOption =  (<PastDebatespage />)
     }
    else if (this.state.CurrentRequestspage === true)
     {
        profileOption =  (<CurrentRequestspage />)
     }
    else if (this.state.ForfeitedDebatespage === true)
     {
       profileOption =  (<ForfeitedDebatespage  />)
     }
     else if (this.state.ActiveDebatespage === true)
      profileOption = (<ActiveDebatespage />)

     // var profileOption = null;
     //    if (this.state.PastDebatespage === true)
     //     {
     //       return(<div class = "redbox"></div>)
     //     }

    //hypoclass textPurple

return(

    <div class = "profileinfoformat">

      <div>
          <p class = "profilename">{this.props.fields.firstName} {this.props.fields.lastName}</p>
                <p class = "profileschool"> {this.props.fields.school} </p>


    <div class = "informationrow">
          <p class = "profilestatus"> Public Figure Status: {this.props.fields.status} </p>
          <div>
        
          </div>
      </div>
          <p class= "profilebio"> {this.props.fields.bio} </p>
      </div>
      <img class = "parthenonprofile" src ={parthenonprofile}/>
      <img class = "cliffline" src = {cliffline} />
        <div class = "toptextrow">


            <div class= "toptextnumbercolumn">
              <div class ="participatedtoptextnumber">{this.props.completedDebatesForUser == null ? "?" : this.props.completedDebatesForUser.length}</div>
              <button onClick={this.pastDebatespage} class = {this.state.PastDebatespage ? "purpleparticipatedtoptext" : "participatedtoptext"}>Past Debates</button>
            </div>

              <div class ="seperatingline"> </div>

              <div class= "toptextnumbercolumn">
                <div class ="forfeiteddebatestoptextnumber">{this.props.rejectedDebatesForUser == null ? "?" : this.props.rejectedDebatesForUser.length}</div>
                <button onClick={this.forfeitedDebatespage} class = {this.state.ForfeitedDebatespage ? "purpleforfeitstoptext" : "forfeitstoptext"}>Forfeited Debates</button>
              </div>



              <div class ="seperatingline"> </div>


            <div class= "toptextnumbercolumn">
              <div class ="currentrequesttoptextnumber">{this.props.requestedDebatesForUser == null ? "?" : this.props.requestedDebatesForUser.length}</div>
              <button onClick={this.currentRequestspage} class ={this.state.CurrentRequestspage ? "purplecurrentrequeststoptext" : "currentrequeststoptext"}>Current Requests</button>
            </div>


            <div class ="seperatingline"> </div>

            <div class= "toptextnumbercolumn">
              <div class ="activedebatestoptextnumber">{this.props.activeDebatesForUser == null ? "?" : this.props.activeDebatesForUser.length}</div>
              <button onClick={this.activeDebatespage} class ={this.state.ActiveDebatespage ? "purpleactivetoptext" : "activetoptext"}>Active Debates</button>
            </div>
        </div>

            <div>
              {profileOption}
            </div>


      </div>


   )
   }
 }


 function mapStateToProps(state) {
   return { fields: state.auth.fields, email:state.auth.email, activeDebatesForUser: state.auth.activeDebatesForUser, rejectedDebatesForUser: state.auth.rejectedDebatesForUser, requestedDebatesForUser: state.auth.requestedDebatesForUser, completedDebatesForUser: state.auth.completedDebatesForUser };
 }

 export default withRouter(connect(mapStateToProps, { getUserFromEmail, getActiveDebatesForUser,getRejectedDebatesForUser,getCompletedDebatesForUser, getPendingDebatesForUser })(ProfilePage));
