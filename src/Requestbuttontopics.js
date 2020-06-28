import React, { Component } from "react";
import "./TopicRequestSearchbox.css";
import TrendingNewsTopicsPage from "./trendingNews/trendingNewsTopics";
class RequestButtonTopics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      text: '',
      resetNeeded: false,
    };
  }


    onTextChanged = (e) => {
    //  console.log(this.props.articles)

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
      this.setState(() => ({ data, text: value,  collapse: true }));
    }

    clickedItem = (item) => {
      this.setState({text: item, collapse: false})
      this.props.changeTopic1(item)
    }

    renderData = () => {
      const { data } = this.state;
    //  console.log(data)
      if(data==null || this.state.text === ''){
        return null;
      }
      else if (data.length === 0 || this.state.text === '' || !this.state.collapse) {
        return null;
      }
      return (
        <ul>
        {data.map((item) => <li className="dropDown" onClick={() => {this.clickedItem(item)}}>{item}</li>)}
        </ul>
      );
    }


render() {
//  console.log(this.state.data)
if(this.props.textFromParent === '' && this.state.text!=null && this.state.resetNeeded){
  this.setState({text: '', resetNeeded:false})
}
  return (
    <div class="topicsrequestText">
      <div class="searchrowtwo">
        <img width="27px" height="30px" className="newspapericon" src={require("./newspapericon.png")} />
          <div class="formtwo"><input className="formtwo"
          value={this.state.text} onChange={this.onTextChanged}
          type="text" name="name" autocomplete="off" required />
            <label for="name" class= "label-nametwo">
              <span class="content-nametwo">Headline</span>
            </label>
          </div>

    </div>

    <div style = {{marginTop: '20px'}}>
      {this.renderData()}
   </div>

    </div>
  );
}
}
export default RequestButtonTopics;
