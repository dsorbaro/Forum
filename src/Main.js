import React, { Component } from "react";
import logo from "./forumCircle.png";
import buttonicon from "./requestbuttonicon.png";
import "./main.css";
import "./App.css";
import bigColumn from "./bigColumn.png";
import mediumColumn from "./mediumColumn.png"
import smallColumn from "./smallColumn.png"
import RequestButtons from "./requestButtons";
import TrendingNewsTopicsPage from "./trendingNews/trendingNewsTopics";
import RequestButtonTopics from "./Requestbuttontopics";

import SubmitRequestbutton from "./submitrequestbutton";
const axios = require('axios');



class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {articles: null, person1: "", topic1: "", person2:''};
  }

  componentDidMount() {
    var url = "https://webhose.io/filterWebContent?token=a6c91544-5aa9-4a58-9f8d-edffcf1730d8&format=json&sort=crawled&q=policy%20social.facebook.likes%3A%3E6000%20site_type%3Anews%20language%3Aenglish%20site_category%3Apolitics%20thread.country%3AUS%20social.facebook.shares%3A%3E2000"
  //   var url = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=85f3e01217b741ca90fec0f951096865';
     axios.get(`${url}`)
         .then(res => {
           const articles = res.data.posts;
           console.log(res.data.posts);
           this.setState({articles:articles})
         })
         .catch(error => {
           console.log(error);
         });
  }

  changePerson1 = (name) => {
    this.setState({person1: name})
  }

  changePerson2 = (name) => {
    this.setState({person2: name})
  }


  changeTopic1 = (name) => {
    this.setState({topic1: name})
  }


  render() {
    var classs = "button"
    if(this.state.person1 != "" && this.state.topic1 !="" && this.state.person2 !=""){
      classs = "buttonBlink"
    }


    return (
      <div>
      <div class="backgroundofsite">
          <div>
                <div class="parth">
                  <div class="breaktheNews"><h1>Break the News</h1></div>
                  <div class="requestsystemRow">
                      <div class="publicFigurerequstBoxLeft">
                          <div class="publicFigurerequstBox">
                          <RequestButtons
                            title="Public Figure"
                            changePerson1={this.changePerson1}
                            changePerson2={null}
                          />
                         </div>
                      </div>

                      <div class="topicRequestbox">
                      <RequestButtonTopics
                      title="Debate Topic"
                      changeTopic1={this.changeTopic1}
                      articles={this.state.articles}
                      />
                      </div>
                      <div class="publicFigurerequstBoxRight">
                          <div class="publicFigurerequstBox">
                          <RequestButtons
                          title="Public Figure"
                          changePerson1={null}
                          changePerson2={this.changePerson2}
                          />
                          </div>
                            <div class="SubmitRequestbuttonlocation">
                            <SubmitRequestbutton
                            bclass={classs}
                            />
                                  </div>
                      </div>

                      </div>
                </div>
          </div>


        <div>
            <div class = "bottomhalf">

                  <div class="trendinglogoline"> </div>
                  <div class="todaysTrendingConversationRequests"><h4>Trending Conversation Requests</h4>
                                <div class="trendinglogolineTwo"> </div>
                                <div class="trendingNewstopicstext">
                                  {" "}
                                  <h4>Trending News Topics</h4>
                                  <div class="TrendingNewTopicsBox"><TrendingNewsTopicsPage articles={this.state.articles}/></div>
                                </div>
                  </div>
                        <div class="trendingvoterRectangle">
                            <img class="mediumColumn" src={mediumColumn} />
                            <img class="bigColumn" src={bigColumn} />
                            <img class="smallColumn" src={smallColumn} />
                        </div>
            </div>
        </div>
    </div>
    </div>
    );
  }
}

export default Main;
