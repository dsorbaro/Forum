
import React, { Component } from "react";
import "./profile.css"
import newsprofileicon from "./newsprofileicon.png"
import personprofileicon from "./personprofileicon.png"
import { withRouter, Link } from 'react-router-dom';
import { getCompletedDebatesForUser } from '../actions';
import { connect } from 'react-redux';

class PastDebatespage extends Component {
  constructor(props) {
    super(props);
        this.state = {};
    }

    componentDidMount() {
      if(this.props.email!=null){
        this.props.getCompletedDebatesForUser({email: this.props.email})
      }
    }

   render() {
     var debateRequests = this.props.completedDebatesForUser == null ? <p class = "nocurrentrequeststext">No current debate requests</p> : (
       Object.keys(this.props.completedDebatesForUser).map((item)=> {
      //   console.log(this.props.completedDebatesForUser[item])
         return (
          <div class= "asinglerequest">
          <div class ="borderline">
          </div>
          <div>
          <div class = "iconrow">
            <img class = "personprofileicon" src={personprofileicon} />
            <p class = "currentrequestspf">{this.props.completedDebatesForUser[item].requestID.person1} </p>
          </div>
              <div class = "iconrow">
              <img class = "newsprofileicon" src={newsprofileicon} />
            <p class = "currentrequeststopic">{this.props.completedDebatesForUser[item].requestID.topic} </p>
            </div>

            <div class = "iconrow">
                <img class = "personprofileicontwo" src={personprofileicon} />
                <p class = "currentrequestspf"> {this.props.completedDebatesForUser[item].requestID.person2} </p>
            </div>
            <p class = "currentrequestsnumber"> Number of Requests: {this.props.completedDebatesForUser[item].requestID.numRequests} </p>
            <button style={{backgroundColor: 'black'}}> <Link to={`/debate/${this.props.completedDebatesForUser[item]._id}`}>View Debate</Link> </button>
            <div class ="borderline">
            </div>
          </div>
          </div>

         )
       })
     )
     return (
      <div>
      <p> Your posted convos </p>


      {debateRequests}
      </div>
     );
   }
 }


 function mapStateToProps(state) {
   return { email:state.auth.email, completedDebatesForUser: state.auth.completedDebatesForUser  };
 }

 export default withRouter(connect(mapStateToProps, { getCompletedDebatesForUser })(PastDebatespage));
