import React, { Component } from "react";
import "./main.css";
import TrendingNewsTopicsPage from "./trendingNews/trendingNewsTopics";
class RequestButtonTopics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      text: '',
    };
  }


    onTextChanged = (e) => {
      console.log(this.props.articles)

      var items = [];
      if(this.props.articles !=null){
        for(var i = 0; i<this.props.articles.length; i++){
          items.push(this.props.articles[i].title)
        }
      }

      const { value } = e.target;

      let data = [];
      if (value!= '' && value.length > 0) {
        const regex = new RegExp(`^${value}`, 'i');
        data = items.sort().filter((v) => regex.test(v));
      }
      this.setState(() => ({ data, text: value }));
    }

    renderData = () => {
      const { data } = this.state;
      console.log(data)
      if(data==null || this.state.text === ''){
        return null;
      }
      else if (data.length === 0 || this.state.text === '') {
        return null;
      }
      return (
        <ul>
          {data.map((item) => <li className="dropDown">{item}</li>)}
        </ul>
      );
    }



  render() {
    return (
      <div>
          <div class="topicsrequestText">
            <h4> {this.props.title}</h4>
          </div>
          <input placeholder="Request Public Figure..." value={this.state.text} onChange={this.onTextChanged} type="text" />
          {this.renderData()}
      </div>
    )
  }
}

export default RequestButtonTopics;
