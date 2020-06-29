
import React, { Component } from "react";
import "./profile.css"
import RequestedDebatesForUser from "./requestedDebatesForUser.js"
class CurrentRequestspage extends Component {
  constructor(props) {
    super(props);
        this.state = {};
    }


   render() {
     return (

       <div>
        <RequestedDebatesForUser />
       </div>


     );
   }
 }

export default CurrentRequestspage;
