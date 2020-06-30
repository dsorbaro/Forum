
import React, { Component } from "react";
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {  getOneDebate, goToNextDebate } from '../actions';
import { getDebateRound, thisUsersTurn} from './../profile/debateMethod'

class FinalDebate extends Component {
  constructor(props) {
    super(props);
        this.state = {};
    }

    componentDidMount() {
      this.props.getOneDebate(this.props.match.params.id)
    }


   render() {
     if(this.props.debate == null){
       return <p> loading </p>
     }

     return (
       <div>
        <p> Page for {this.props.match.params.id} </p>
        <p> Topic: {this.props.debate.requestID.topic} </p>
        <p> People: {this.props.debate.requestID.person1} vs {this.props.debate.requestID.person2} </p>
        <p> Hypothetically there is a video here </p>
      </div>

     );
   }
 }

 function mapStateToProps(state) {
   return {email: state.auth.email, debate: state.debate.oneDebate };
 }

 export default withRouter(connect(mapStateToProps, { getOneDebate })(FinalDebate));
