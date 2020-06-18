import React, { Component } from "react";
import "./trendingNews.css";

class SmallArticle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>{this.props.title}</p>
        <p>{this.props.author}</p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default SmallArticle;
