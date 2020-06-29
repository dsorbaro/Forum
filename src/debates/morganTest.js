
import React, { Component } from "react";
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllDebates, fetchRequests, getPendingDebatesForUser, editDebateStatus } from '../actions';

class MorganTest extends Component {
  constructor(props) {
    super(props);
        this.state = {};
    }

    componentDidMount() {
      //this.props.getAllDebates();
    //  this.props.fetchRequests();
   //  this.props.getPendingDebatesForUser({email: "msorbaro@gmail.com"});
     const fakeFields = {
       email: "msorbaro@gmail.com",
       status: "ACCEPTED"
     }
      this.props.editDebateStatus('5efa23dcdf4405c92269a302', fakeFields)
    }

   render() {
     return (
      <p> Morgan Page </p>
     );
   }
 }

 function mapStateToProps(state) {
   return {admin: state.auth.admin, pendingDebators: state.pendingDebators.all };
 }

 export default withRouter(connect(mapStateToProps, { getAllDebates, fetchRequests, getPendingDebatesForUser, editDebateStatus })(MorganTest));
