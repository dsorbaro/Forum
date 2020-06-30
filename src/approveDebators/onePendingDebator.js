import React, { Component } from "react";
import "../homepage/TopicRequestSearchbox.css";
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPendingDebators } from '../actions';

class OnePendingDebator extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  approve = () => {
    this.props.approveDebators(this.props.fields._id)
  }

  reject = () => {
    this.props.rejectDebators(this.props.fields._id)
  }


render() {
    return (
      <div>
        <p> Name:  {this.props.fields.firstName} {this.props.fields.lastName} </p>
        <p> Email: {this.props.fields.email} </p>
        <p> Bio: {this.props.fields.bio} </p>
        <button onClick={this.approve} style={{backgroundColor: 'black'}}> Approve {this.props.fields.firstName}? </button>
        <button onClick={this.reject} style={{backgroundColor: 'black'}}> Reject {this.props.fields.firstName}? </button>
      </div>
    );
  }

}

export default OnePendingDebator;
// function mapStateToProps(state) {
//   return {admin: state.auth.admin, pendingDebators: state.pendingDebators.all };
// }
//
// export default withRouter(connect(mapStateToProps, { getPendingDebators })(ApproveDebators));
