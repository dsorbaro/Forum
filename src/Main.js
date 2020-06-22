import React, { Component } from "react";
import requestbutton from "./nocutoffrequest.png";
import logo from "./forumCircle.png";
import "./main.css";
import trendingcolumnfirst from "./trendingcolumnfirst.png"
import RequestButtons from "./requestButtons";
import TrendingNewsTopicsPage from "./trendingNews/trendingNewsTopics";
import RequestButtonTopics from "./Requestbuttontopics";
import parth from "./parth.png"
const axios = require('axios');



class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {articles: null};
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

  render() {
    console.log(this.state.articles)
    return (
      <div>

        <div class="row">
          <div class="forumaboveLine">
            <img class="mainForumlogo" src={logo} />
                  <div class="mainForumtext"><h1>FORUM</h1></div>
                  <div class="logoline"></div>
          </div>
        </div>
          <div>
                <div class="breaktheNews"><h1>Break the News</h1></div>
                <div class="parth" src={parth}>
                <div class="requestsystemRow">


                  <div class="publicFigurerequstBoxLeft">
                      <div class="publicFigurerequstBox">
                      <RequestButtons
                        title="Public Figure"
                      />
                      </div>
                  </div>

                      <div class="topicRequestbox">
                      <RequestButtonTopics
                      title="Debate Topic"
                      articles={this.state.articles}
                      />
                      </div>

                      <div class="publicFigurerequstBoxRight">
                      <div class="publicFigurerequstBox">
                      <RequestButtons
                      title="Public Figure"
                      />
                      </div>

                            <img class="requestbutton" src={requestbutton} />
                      </div>

                </div>
          </div>
        </div>


        <div>
          <div class="trendinglogoline"> </div>
          <div class="todaysTrendingConversationRequests"><h4>Trending Conversation Requests</h4>
                <div class="trendinglogolineTwo"> </div>
                      <div class="trendingNewstopicstext">
                        {" "}
                        <h4>Trending News Topics</h4>
                              <div class="TrendingNewTopicsBox"><TrendingNewsTopicsPage articles={this.state.articles}/></div>
                      </div>
                <div class="trendingvoterRectangle">
                  <img class="trendingcolumnfirst" src={trendingcolumnfirst} />
                  <img class="trendingcolumnsecond" src={trendingcolumnfirst} />
                    <img class="trendingcolumnthird" src={trendingcolumnfirst} />
                  </div>
          </div>

        </div>
    </div>
    );
  }
}

export default Main;
