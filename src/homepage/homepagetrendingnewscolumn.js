import React, { Component } from "react";
import "./trendingheadlineandpf.css"
import TrendingNewsTopicsPage from "../trendingNews/trendingNewsTopics";



class Homepagetrendingnewscolumn extends Component {
  constructor(props) {
    super(props);
    this.state ={}
    }
    componentDidMount() {
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
    }

      render() {
        console.log("running")
        return (

          <div>
                <TrendingNewsTopicsPage article={this.state.articles} />
          </div>

    );
  }
}


export default Homepagetrendingnewscolumn;
