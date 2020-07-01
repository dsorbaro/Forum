
import React, { Component } from "react";
import "./profile.css"
import newsprofileicon from "./newsprofileicon.png"
import wreath from "./wreath.png"
import wreathhover from "./wreathhover.png"
import "./profile.scss"
import personprofileicon from "./personprofileicon.png"
import requestbuttoniconprof from "./requestbuttoniconprof.png"
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
          <div class= "asinglepastrequest">
          <div class ="borderline">
          </div>
          <div>
          <div class = "iconrow">
            <img class = "personprofileicon" src={personprofileicon} />
            <p class = "currentrequestspf">{this.props.completedDebatesForUser[item].requestID.person1} </p>
          </div>
              <div class = "iconrow">
              <img class = "pastnewsprofileicon" src={newsprofileicon} />
            <p class = "pastdebatesnewstopic">{this.props.completedDebatesForUser[item].requestID.topic} </p>
            </div>

            <div class = "iconrow">
                <img class = "personprofileicontwo" src={personprofileicon} />
                <p class = "currentrequestspf"> {this.props.completedDebatesForUser[item].requestID.person2} </p>
            </div>
            <div class = "iconrow">
                  <img class = "pastdebatenumbericon" src={requestbuttoniconprof} />
                  <p class = "pastrequestsnumber">{this.props.completedDebatesForUser[item].requestID.numRequests} </p>
            </div>

              <button class = "changesize"> <Link to={`/debate/${this.props.completedDebatesForUser[item]._id}`}></Link></button>


            <div class = "sizecheck">
                  <svg version="" id="play"  x="5px" y="5px" height="5px" width="5px"
                	 viewBox="0 0 100 100" enable-background="new 0 0 5 5">
                  <path class="stroke-solid" fill="none" stroke="#FFFFFF"  d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7
                    C97.3,23.7,75.7,2.3,49.9,2.5"/>
                  <path class="stroke-dotted" fill="none" stroke="#530096"  d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7
                    C97.3,23.7,75.7,2.3,49.9,2.5"/>
                  <path class="icon" fill="#3c065f" d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z"/>
                </svg>
<img class = "wreath" src = {wreath}/>
      </div>

            <div class ="borderlinepastdebates">
            </div>
          </div>
          </div>

         )
       })
     )
     return (
      <div>
      <p class = "yourpostedcon"></p>


      {debateRequests}
      </div>
     );
   }
 }


 function mapStateToProps(state) {
   return { email:state.auth.email, completedDebatesForUser: state.auth.completedDebatesForUser  };
 }

 export default withRouter(connect(mapStateToProps, { getCompletedDebatesForUser })(PastDebatespage));
