import React, { Component } from "react";
import { getUserFromEmail } from './actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
        this.state = {varNoInfo: true};
    }

    componentDidMount(){
      if(this.props.email!=null){
        this.props.getUserFromEmail({email: this.props.email});

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
         <p> Bio: {this.props.fields.bio} </p>
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
          <p> Name: {this.props.fields.firstName} {this.props.fields.lastName}</p>
          <p> Email: {this.props.fields.email} </p>
          <p> school: {this.props.fields.school} </p>
          {status}
       </div>
     );
   }
 }
 function mapStateToProps(state) {
   return { fields: state.auth.fields, email:state.auth.email };
 }

 export default withRouter(connect(mapStateToProps, { getUserFromEmail })(ProfilePage));
