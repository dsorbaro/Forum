import React, { Component } from "react";
import requestbutton from "./nobackrequest.png";
import logo from "./forumCircle.png";
import "./main.css";
import RequestButtons from "./requestButtons";
import TrendingNewsTopicsPage from "./trendingNews/trendingNewsTopics";

class Main extends Component {
  render() {
    return (
      <div>
        <div class="row">
          <div class="forumaboveLine">
            <img class="mainForumlogo" src={logo} />
            <div class="mainForumtext">
              <h1>FORUM</h1>
            </div>
            <div class="logoline"></div>
          </div>
        </div>
        <div>
          <div class="breaktheNews">
            <h1> Break the News</h1>
          </div>
          <div class="innerTitleDiv">
            <RequestButtons
              title="Public figures"
              mainText="What public figure would you like to call to debate?"
            />
            <RequestButtons
              title="Debate Topic"
              mainText="On what trending news topic do you want to see a debate?"
            />
            <RequestButtons
              title="Public figures"
              mainText="What public figure would you like to call to debate?"
            />
            <img class="requestbutton" src={requestbutton} />
          </div>
        </div>
        <div>
          <div class="trendinglogoline"> </div>
          <div class="todaysTrendingConversationRequests">
            <h4> Today's Trending Conversation Requests </h4>
            <div class="trendinglogolineTwo"> </div>
            <div class="trendingvoterRectangle"> </div>
            <div class="trendingNewstopicstext">
              {" "}
              <h4>Trending News Topics</h4>
              <div class="TrendingNewTopicsBox">
                      <TrendingNewsTopicsPage/>
              </div>
              </div>
            </div>
          </div>
          </div>
    );
  }
}

export default Main;
