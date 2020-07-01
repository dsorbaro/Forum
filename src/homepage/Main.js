import React, { Component } from "react";
import logo from "../images/forumCircle.png";
import buttonicon from "./requestbuttonicon.png";
import "./main.css";
import "../App.css";
import "./submitrequestbutton.css"
import bigColumn from "../images/bigColumn.png";
import "./trendingheadlineandpf.css";
import mediumColumn from "../images/mediumColumn.png"
import smallColumn from "../images/smallColumn.png"
import intrViewLogo from "../images/IntrViewlogo.png"
import aboutbground from "../images/aboutbground.jpg"
import RequestButtons from "./requestButtons";
import Homepagetrendingnewscolumn from "./homepagetrendingnewscolumn";
import Homepagetrendingpfcolumn from "./homepagetrendingpfcolumn";
import TrendingNewsTopicsPage from "../trendingNews/trendingNewsTopics";
import RequestButtonTopics from "./Requestbuttontopics";
import NewsTicker from "../newsticker/newsticker";
import emailjs from 'emailjs-com';
import SubmitRequestbutton from "./submitrequestbutton";
import OneTrendingRequest from './oneTrendingRequest'
import { fetchRequests, createRequest, fetchPopularRequests, getAllCompletedDebates } from '../actions';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
const axios = require('axios');



class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {articles: null, person1: "", topic1: "", person2:'', notLoggedIn:null, person1Email: '', person2Email:'', Homepagetrendingnewscolumn:true, Homepagetrendingpfcolumn:false};
  }




  componentDidMount() {
    // var url = "https://webhose.io/filterWebContent?token=a6c91544-5aa9-4a58-9f8d-edffcf1730d8&format=json&sort=crawled&q=policy%20social.facebook.likes%3A%3E14000%20site_type%3Anews%20language%3Aenglish%20site_category%3Apolitics%20thread.country%3AUS%20social.facebook.shares%3A%3E6000"
    // axios.get(`${url}`)
    //      .then(res => {
    //        const articles = res.data.posts;
    //        console.log(res.data.posts);
    //        this.setState({articles:articles})
    //
    //        console.log(articles);
    //      })
    //      .catch(error => {
    //        console.log(error);
    //      });



         var fakeData = [
           {
             author: "Person A",
             title: "Henry should give David his lamp",
             url: "www.fakenews.com"
           },
           {
             author: "Person B",
             title: "First Egg! Will there be more?",
             url: "www.fakenews.com"
           },
           {
             author: "Bobb",
             title: "Laccrosse Ball should have had more recovery time.",
             url: "www.fakenews.com"
           },
           {
             author: "Mav",
             title: "What killed the chickens?",
             url: "www.fakenews.com"
           },
           {
             author: "Mav",
             title: "Should Jayla and Stephen get Married?",
             url: "www.fakenews.com"
           },
         ]
         this.setState({articles: fakeData})
         this.props.fetchRequests();
         this.props.fetchPopularRequests();
         this.props.getAllCompletedDebates()
  }



  homepagetrendingnewscolumn = () => {
    this.setState({Homepagetrendingnewscolumn: true, Homepagetrendingpfcolumn: false})
  }

  homepagetrendingpfcolumn = () => {
    this.setState({Homepagetrendingnewscolumn: false, Homepagetrendingpfcolumn: true})
  }






  changePerson1 = (item) => {
    this.setState({person1: item.name, person1Email: item.email, person1ID: item.id})
  }

  changePerson2 = (item) => {
    this.setState({person2: item.name, person2Email: item.email, person2ID: item.id})
  }


  changeTopic1 = (name) => {
    this.setState({topic1: name})
  }


  sendEmail = () => {
  //  console.log("I was clicked")

    //var request =  this.state.person1 + " with " + this.state.person2 + " about " + this.state.topic1;
    var content = {
    	person1: this.state.person1,
    	person2: this.state.person2,
      person1Email: this.state.person1Email,
      person2Email: this.state.person2Email,
    	topic: this.state.topic1,
    	requesterEmail: this.props.email,
      person2ID: this.state.person2ID,
      person1ID: this.state.person1ID,
    }
  //  console.log(content);

    // console.log(content);
    // console.log("^ content above")

    this.props.createRequest(content)


    emailjs.send('userconversationrequests', 'template_3Np8FQNF', content, 'user_k1KwbaOjnzwFgVMuaAyrm')
      .then((result) => {
        //  console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      this.setState({person1: "", topic1: "", person2:'', person1Email: '', person2Email:''});

  }



  render() {
    var classs = "button"
    if(this.state.person1 != "" && this.state.topic1 !="" && this.state.person2 !=""){
      classs = "buttonBlink"
    }





    var error = this.state.notLoggedIn == null ? null : <p class = "youneedtobeloggedintext"> You need to be signed in to submit a request</p>

    var requestColums = this.props.popularRequests == null ? <p> no requests </p> : (
      Object.keys(this.props.popularRequests).map((item)=> {
        return (
          <OneTrendingRequest info={this.props.popularRequests[item]}/>
        )
      })
    )

    var recentDebates = this.props.debates == null ? <p> no debates </p> : (
      Object.keys(this.props.debates).map((item)=> {
        console.log(this.props.debates[item])
        return (
          <div>
            <p> Debate title: {this.props.debates[item].requestID.topic}</p>
            <p> Person1: {this.props.debates[item].requestID.person1}</p>
            <p> person2: {this.props.debates[item].requestID.person2}</p>
            <button> <Link to={`/debate/${this.props.debates[item]._id}`}>Click to See Debate</Link> </button>
          </div>
        )
      })
    )

    var trendingType = null;

    console.log(this.state.Homepagetrendingpfcolumn);
    console.log("^homepage thing")
     if(this.state.Homepagetrendingnewscolumn === true)
      {
        trendingType =  (<Homepagetrendingnewscolumn />)
      }
     else if (this.state.Homepagetrendingpfcolumn === true)
      {
        trendingType =  (<Homepagetrendingpfcolumn />)
        }
    return (

      <div>
      <div class="backgroundofsite">
      <div><NewsTicker requests={this.props.allRequests}  /></div>
          <div class = "indexone">



                <div class = "bottomhalf">
                      <div class="trendinglogoline"> </div>
                      <div class="todaysTrendingConversationRequests"><h4>Trending Conversation Requests</h4>
                        <div class="trendinglogolineTwo"> </div>
                        <div class="trendingNewstopicstext">{" "}</div>
                      </div>
                      <div class="trendingvoterRectangle">{requestColums}</div>
                </div>




            <div class="parth">
              <div class="breaktheNews"><h1>Break the News</h1></div>
                  <div class="requestsystemRow">
                      <div class="publicFigurerequstBoxLeft">
                          <div class="publicFigurerequstBox">
                          <RequestButtons
                            title="Public Figure"
                            text={this.state.person1}
                            changePerson1={this.changePerson1}
                            changePerson2={null}
                            textFromParent={this.state.person1}/>
                         </div>
                      </div>

                      <div class="topicRequestbox">
                      <RequestButtonTopics
                      title="Debate Topic"
                      changeTopic1={this.changeTopic1}
                      articles={this.state.articles}
                      textFromParent={this.state.topic}/>
                      </div>

                      <div class="publicFigurerequstBoxRight">
                          <div class="publicFigurerequstBox">
                          <RequestButtons
                          title="Public Figure"
                          changePerson1={null}
                          changePerson2={this.changePerson2}
                          textFromParent={this.state.person2}/>
                          </div>
                            <div class="SubmitRequestbuttonlocation">
                            <SubmitRequestbutton
                              bclass={classs}
                              emailFunctionVariable={() => {if(this.props.email != null) {this.sendEmail()} else {this.setState({notLoggedIn:true})}}}/>
                      </div>
                   </div>
                      {error}
                </div>
                  <div>
                        <div class ="trendingeverythingbox">

                            <div class ="trendingbuttons">
                            <button onClick={this.homepagetrendingnewscolumn} class = {this.state.Homepagetrendingnewscolumn ? "toggletrendingnews" : "toggletrendingnewsgrey"}>Headlines</button>
                            <button onClick={this.homepagetrendingpfcolumn} class = {this.state.Homepagetrendingpfcolumn ? "toggletrendingpf" : "toggletrendingpfgrey"}>Public Figures</button>
                              <div class = "hline"></div>
                            </div>
                            <div>
                            {trendingType}
                            </div>
                        </div>
                  </div>
                </div>
          </div>


        <div>

        </div>
        </div>
      <div class = "recentlypostedbar">
        <div class ="recentlypostedtext">
            <h3> Posted Conversations </h3>
            <div>
            <div class ="postedconvologoline"></div>
            <div class ="postedconvologolineTwo"></div>
            </div>
            {recentDebates}
          </div>
        </div>
        <div class = "dline"> </div>
    </div>
    );
  }

}

function mapStateToProps(state) {
  return { allRequests: state.requests.all, email: state.auth.email, popularRequests:state.requests.mostPopular, debates: state.debate.all };
}

export default withRouter(connect(mapStateToProps, { getAllCompletedDebates, fetchRequests, createRequest, fetchPopularRequests })(Main));
