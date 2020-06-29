import React, { Component } from "react";
import { getUserFromEmail } from '../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';import "./profile.css"
import RequestedDebatesForUser from "./requestedDebatesForUser"
import ActiveDebatespage from "./ActiveDebatespage.js"
import parthenonprofile from './parthenonprofile.png'
import cliffline from "./cliffline.png"
import PastDebatespage from './PastDebatespage.js'
import CurrentRequestspage from './CurrentRequestspage.js'
import ForfeitedDebatespage from './ForfeitedDebatespage.js'
class ProfilePage extends Component {
  constructor(props) {
    super(props);
        this.state = {varNoInfo: true, PastDebatespage: false, CurrentRequestspage: false, ForfeitedDebatespage:false, ActiveDebatespage: false};
    }

    componentDidMount(){
      if(this.props.email!=null){
        this.props.getUserFromEmail({email: this.props.email});
  //      this.props.getUsersRequestedDebates({email: this.props.email})
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
     return (


    <div class = "profileinfoformat">

      <div>
          <p class = "profilename">{this.props.fields.firstName} {this.props.fields.lastName}</p>
          <p class = "profilestatus"> Public Figure Status: {this.props.fields.status} </p>
          <p class = "profileschool"> {this.props.fields.school} </p>
          <p class= "profilebio"> {this.props.fields.bio} </p>
      </div>
      <img class = "parthenonprofile" src ={parthenonprofile}/>
      <img class = "cliffline" src = {cliffline} />
        <div class = "toptextrow">
            <div class= "toptextnumbercolumn">
              <div class ="participatedtoptextnumber">10</div>
              <button onClick={this.pastDebatespage} class = "participatedtoptext">Past Debates</button>
            </div>
              <div class ="seperatingline"> </div>

            <div class= "toptextnumbercolumn">
              <div class ="currentrequesttoptextnumber">10</div>
              <button onClick={this.currentRequestspage} class = "currentrequeststoptext">Current Requests</button>
            </div>

              <div class ="seperatingline"> </div>

            <div class= "toptextnumbercolumn">
              <div class ="forfeiteddebatestoptextnumber">10</div>
              <button onClick={this.forfeitedDebatespage} class = "forfeitstoptext">Forfeited Debates</button>
            </div>
            <div class ="seperatingline"> </div>

            <div class= "toptextnumbercolumn">
              <div class ="activedebatestoptextnumber">10</div>
              <button onClick={this.activeDebatespage} class ="activetoptext">Active Debates</button>
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
   return { fields: state.auth.fields, email:state.auth.email };
 }

 export default withRouter(connect(mapStateToProps, { getUserFromEmail })(ProfilePage));
