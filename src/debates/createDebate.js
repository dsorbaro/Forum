
import React, { Component } from "react";
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {  getOneDebate, goToNextDebate } from '../actions';
import { getDebateRound, thisUsersTurn} from './../profile/debateMethod'
import VideoUpload from './VideoUpload'

class CreateDebate extends Component {
  constructor(props) {
    super(props);
        this.state = {};
    }

    componentDidMount() {
      this.props.getOneDebate(this.props.match.params.id)
    }

    goToNextDebator = () => {
      var currRound = getDebateRound(this.props.debate);
      var fields = {
        link: "fakeurlforvideo.com",
        round: currRound
      }
      this.props.goToNextDebate(this.props.match.params.id, fields, this.props.history)
    }

   render() {
     if(this.props.debate == null){
       return <p> loading </p>
     }

     var mainInfo = null;
     if(!thisUsersTurn(this.props.debate, this.props.email)){
       mainInfo = <p> You are waiting for the other user to submit </p>
     }
     else {
       mainInfo = (
         <div>
          <p> Its your turn! </p>
          <VideoUpload />
          <button style={{backgroundColor:'black', width: '200px'}} onClick={this.goToNextDebator}> Click me to "submit" and send debate to next person </button>
         </div>
       )
     }

     console.log(this.props.debate);

     return (
       <div>
        <p> Page for {this.props.match.params.id} </p>
        <p> It is currently round {getDebateRound(this.props.debate)} </p>
        <p> Topic: {this.props.debate.requestID.topic} </p>
        <p> People: {this.props.debate.requestID.person1} vs {this.props.debate.requestID.person2} </p>
        {mainInfo}
      </div>

     );
   }
 }

 function mapStateToProps(state) {
   return {email: state.auth.email, debate: state.debate.oneDebate };
 }

 export default withRouter(connect(mapStateToProps, { getOneDebate, goToNextDebate })(CreateDebate));
