import React, { Component } from "react";
import "./trendingNews.css";
import SmallArticle from './smallArticle'
const axios = require('axios');

class TrendingNewsTopicsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {articles: null};
  }

  componentDidMount() {
     var url = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=85f3e01217b741ca90fec0f951096865';
     axios.get(`${url}`)
         .then(res => {
           const articles = res.data.articles;
          // console.log(articles);
           this.setState({articles:articles})
         })
         .catch(error => {
           console.log(error);
         });
  }


  render() {
    var currentAr = null;
    if(this.state.articles!=null){
      currentAr = this.state.articles.map((article)=>{
        return(
          <SmallArticle title={article.title} description={article.description} author={article.author}/>
        )
      })
    }
    return (
      <div class="trendingnews">
        {currentAr}
      </div>
    );
  }
}

export default TrendingNewsTopicsPage;
