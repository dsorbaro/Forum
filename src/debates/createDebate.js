
import React, { Component } from "react";
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {  getOneDebate, goToNextDebate } from '../actions';
import { getDebateRound, thisUsersTurn} from './../profile/debateMethod'
import VideoUpload from './VideoUpload'
import VideoPlayer from './debatePlayer'
import "./debates.css"

class CreateDebate extends Component {
  constructor(props) {
    super(props);
        this.state = {videoURL: null};
    }

    componentDidMount() {
      this.props.getOneDebate(this.props.match.params.id)
    }

    goToNextDebator = () => {
      var currRound = getDebateRound(this.props.debate);

      console.log("Going to next debator");
      console.log(this.state.videoURL)
      console.log(currRound)
      if(this.state.videoURL === null){
        return;
      }
      else {
        var fields = {
          link: this.state.videoURL,
          round: currRound
        }
        this.props.goToNextDebate(this.props.match.params.id, fields, this.props.history)
        }
      }

      setVideoURL = (url) => {
        console.log(url);
        console.log("back in set vide")
        this.setState({videoURL: url})
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
         <div style={{display:'flex', flexDirection:'column'}}>
          <p> Its your turn! </p>
          <VideoPlayer debateData={this.props.debate}/>
          <p> Now upload your response! </p>
          <VideoUpload setVideoURL={this.setVideoURL}/>
          <button  onClick={this.goToNextDebator}> Click me to "submit" and send debate to next person </button>
         </div>
       )
     }

     console.log(this.props.debate);

     return (
       <div>
        <p> Page for {this.props.match.params.id} </p>
        <p class = "itiscurrently"> It is currently round {getDebateRound(this.props.debate)} </p>
        <p class = "headlineondebateapage"> Headline: {this.props.debate.requestID.topic} </p>
        <p class = "publicfigureondebatepage"> Public Figures: {this.props.debate.requestID.person1} and {this.props.debate.requestID.person2} </p>
        {mainInfo}
      </div>

     );
   }
 }

 function mapStateToProps(state) {
   return {email: state.auth.email, debate: state.debate.oneDebate };
 }

 export default withRouter(connect(mapStateToProps, { getOneDebate, goToNextDebate })(CreateDebate));
