import React, { Component } from "react";
import "./TopicRequestSearchbox.css";
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPendingDebators,changeUserStatus } from './actions';
import OnePendingDebator from './onePendingDebator';

class ApproveDebators extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      text: '',
    };
  }

  componentDidMount() {
    this.props.getPendingDebators()
  }

  approveDebators = (id) => {
    console.log(id)
    this.props.changeUserStatus(id, "APPROVED");
  }

  rejectDebators = (id) => {
    this.props.changeUserStatus(id, "REJECTED");
  }

render() {
    console.log(this.props.pendingDebators)
    if(!this.props.admin){
      return(
        <div>
          You must be an admin to view this page
        </div>
      )
    }

    var allPending = this.props.pendingDebators == null ? null :
      Object.keys(this.props.pendingDebators).map((item)=> {
        console.log(this.props.pendingDebators[item])
        return (
        <OnePendingDebator  rejectDebators={this.rejectDebators} approveDebators={this.approveDebators} fields={this.props.pendingDebators[item]}/>
      )
    })

    return (
      <div>
      <p> debators go here</p>
      {allPending}
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {admin: state.auth.admin, pendingDebators: state.pendingDebators.all };
}

export default withRouter(connect(mapStateToProps, { getPendingDebators, changeUserStatus })(ApproveDebators));
