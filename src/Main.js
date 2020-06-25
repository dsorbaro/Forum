import React, { Component } from "react";
import logo from "./forumCircle.png";
import buttonicon from "./requestbuttonicon.png";
import "./main.css";
import "./App.css";
import "./submitrequestbutton.css"
import bigColumn from "./bigColumn.png";
import mediumColumn from "./mediumColumn.png"
import smallColumn from "./smallColumn.png"
import RequestButtons from "./requestButtons";
import TrendingNewsTopicsPage from "./trendingNews/trendingNewsTopics";
import RequestButtonTopics from "./Requestbuttontopics";
import NewsTicker from "./newsticker";
import * as db from './datastore.js';


import emailjs from 'emailjs-com';


import SubmitRequestbutton from "./submitrequestbutton";
const axios = require('axios');



class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {articles: null, person1: "", topic1: "", person2:''};
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
    //
    //

         var fakeData = [
           {
             author: "Person A",
             title: "I love David Jr",
             url: "www.fakenews.com"
           },
           {
             author: "Person B",
             title: "Chickensssss",
             url: "www.fakenews.com"
           },
           {
             author: "Bobb",
             title: "Yes there are two bs",
             url: "www.fakenews.com"
           },
           {
             author: "Mav",
             title: "Should I propose to Henry?",
             url: "www.fakenews.com"
           },
         ]
         this.setState({articles: fakeData})
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


  sendEmail = () => {
    console.log("I was clicked")

    var request =  this.state.person1 + " with " + this.state.person2 + " about " + this.state.topic1;
    var content = {
      message_html: request,
      from_name: "testAccount",
      reply_to: "dsorbaro@gmail.com"
    }

    console.log(content);
    console.log("^ content above")

    db.addNewRequest(request)


    emailjs.send('userconversationrequests', 'template_3Np8FQNF', content, 'user_k1KwbaOjnzwFgVMuaAyrm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
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
          <NewsTicker
          />
      </div>
          <div class = "indexone">
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
                              emailFunctionVariable={this.sendEmail}
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
                                  <div class="trendingheadlinestext">
                                      <h3>Trending Headlines</h3>
                                  </div>
                                  <div class="TrendingNewTopicsBox"><TrendingNewsTopicsPage articles={this.state.articles}/></div>
                                </div>
                  </div>
                        <div class="trendingvoterRectangle">
                        <div class="columncolumn">
                            <img class="mediumColumn" src={mediumColumn} />
                            <img src={require("./requestbuttonicon.png")} class="columnrequestbuttonmedium"/>
                        </div>
                        <div class="columncolumn">
                            <img class="bigColumn" src={bigColumn} />

                                  <img src={require("./requestbuttonicon.png")} class="columnrequestbuttonbig"/>

                        </div>
                        <div class="columncolumn">
                            <img class="smallColumn" src={smallColumn} />
                            <img src={require("./requestbuttonicon.png")} class="columnrequestbuttonsmall"/>
                        </div>
                        </div>
            </div>
        </div>
        </div>
      <div class = "recentlypostedbar">
        <div class ="recentlypostedtext">
            <h3> Posted Conversations </h3>
            <div>
            <div class ="postedconvologoline"></div>
            <div class ="postedconvologolineTwo"></div>
            </div>
          </div>
        </div>
        <div class ="bottomborder"></div>
    </div>
    );
  }
}

export default Main;
