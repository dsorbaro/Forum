import React, { Component } from "react";
import "./trendingNews.css";
import SmallArticle from './smallArticle'

class TrendingNewsTopicsPage extends Component {
  constructor(props) {
    super(props);
    // this.state = {articles: this.props.articles};
  }

  // componentDidMount() {
  //   var url = "https://webhose.io/filterWebContent?token=a6c91544-5aa9-4a58-9f8d-edffcf1730d8&format=json&sort=social.facebook.shares&q=policy%20social.facebook.likes%3A%3E15000%20site_type%3Anews%20language%3Aenglish%20site_category%3Apolitics%20thread.country%3AUS%20social.facebook.shares%3A%3E5000"
  // //   var url = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=85f3e01217b741ca90fec0f951096865';
  //    axios.get(`${url}`)
  //        .then(res => {
  //          const articles = res.data.posts;
  //          //console.log(res);
  //          this.setState({articles:articles})
  //        })
  //        .catch(error => {
  //          console.log(error);
  //        });
  // }


  render() {
    var currentAr = null;
    // console.log(this.state.articles);
    // console.log(this.props.articles)
    if(this.props.articles!=null){
      //console.log(this.state.articles)
      currentAr = this.props.articles.map((article)=>{
        return(
          <SmallArticle title={article.title} url={article.url}/>
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
