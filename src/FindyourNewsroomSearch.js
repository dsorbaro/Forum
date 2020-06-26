import React, { Component } from "react";
import "./App.css";

class FindyourNewsroomSearch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (


      <div id="cover">
      <form method="get" action="">
        <div class="tb">
          <div class="td">
              <div class = "positioned"><input type="text" placeholder="Find your Newsroom..." required/></div>
          </div>
          <div class ="pleasemoveagain">
          <div class="td" id="s-cover">
                <button type="submit">
                <div id="s-circle"></div>
                <span></span>
                </button>
          </div>
          </div>
        </div>
      </form>
    </div>



    );
  }
}


export default FindyourNewsroomSearch;
