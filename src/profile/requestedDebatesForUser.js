import React, { Component } from "react";
import { getUsersRequestedDebates } from '../actions';
import { connect } from 'react-redux';
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

          <div>
            <p> Person 1 {this.props.requestedDebatesForUser[item].person1} </p>
            <p> Topic {this.props.requestedDebatesForUser[item].topic} </p>
            <p> Person 2 {this.props.requestedDebatesForUser[item].person2} </p>
            <p class = "totalrequests"> Total Requests {this.props.requestedDebatesForUser[item].numRequests} </p>
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
