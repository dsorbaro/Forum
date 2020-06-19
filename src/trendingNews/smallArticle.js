import React, { Component } from "react";
import "./trendingNews.css";

class SmallArticle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <div class= "trendingnewstopicsandlinks">
        <div class="titleofTrendingarticle">
          <div class= "trendinglistDots"></div>
          <p>{this.props.title}</p>
        </div>
        <div class="linkofTrendingarticle"><p>{this.props.url}</p></div>
        </div>
      </div>
    );
  }
}

export default SmallArticle;
