import React, { Component } from "react";
import "./PublicFigureRequestSearchbox.css";

class RequestButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      text: '',
      collapse: true,
    };
  }

  onTextChanged = (e) => {
    var items = ["Jerry Moran	U.S. Senate Kansas", "Pat Roberts	U.S. Senate Kansas", "Gary Peters	U.S. Senate Michigan","Debbie Stabenow	U.S. Senate Michigan","Tim Kaine	U.S. Senate Virginia","Mark Warner	U.S. Senate Virginia","Chris Van Hollen	U.S. Senate Maryland","Ben Cardin	U.S. Senate Maryland","Dianne Feinstein	U.S. Senate California","Kamala D. Harris	U.S. Senate California","Mike Braun	U.S. Senate Indiana","Todd C. Young	U.S. Senate Indiana","Joni Ernst	U.S. Senate Iowa","Chuck Grassley	U.S. Senate Iowa","John Barrasso	U.S. Senate Wyoming","Mike Enzi	U.S. Senate Wyoming","Mike Crapo	U.S. Senate Idaho","Jim Risch	U.S. Senate Idaho","Tammy Duckworth	U.S. Senate Illinois","Dick Durbin	U.S. Senate Illinois", "Maria Cantwell	U.S. Senate Washington","Patty Murray	U.S. Senate Washington","Jeff Merkley	U.S. Senate Oregon","Ron Wyden	U.S. Senate Oregon","Ronald Harold Johnson	U.S. Senate Wisconsin","Tammy Baldwin	U.S. Senate Wisconsin","Chuck Schumer	U.S. Senate New York","Kirsten Gillibrand	U.S. Senate New York","Tom Cotton	U.S. Senate Arkansas","John Boozman	U.S. Senate Arkansas","Tina Smith	U.S. Senate Minnesota","Amy Klobuchar	U.S. Senate Minnesota","Ted Cruz	U.S. Senate Texas","John Cornyn	U.S. Senate Texas","Mitch McConnell	U.S. Senate Kentucky","Rand Paul	U.S. Senate Kentucky","Rob Portman	U.S. Senate Ohio","Sherrod Brown	U.S. Senate Ohio","Kyrsten Sinema	U.S. Senate Arizona","Martha McSally	U.S. Senate Arizona","Joe Manchin III	U.S. Senate West Virginia","Shelley Moore Capito	U.S. Senate West Virginia","Tom Carper	U.S. Senate Delaware","Chris Coons	U.S. Senate Delaware","Steve Daines	U.S. Senate Montana","Jon Tester	U.S. Senate Montana","David Perdue	U.S. Senate Georgia", "Kelly Loeffler	U.S. Senate Georgia","Elizabeth Warren	U.S. Senate Massachusetts","Edward J. Markey	U.S. Senate Massachusetts","Bernie Sanders	U.S. Senate Vermont","Patrick Leahy	U.S. Senate Vermont","Michael Bennet	U.S. Senate Colorado","Cory Gardner	U.S. Senate Colorado","Richard Shelby	U.S. Senate Alabama","Doug Jones	U.S. Senate Alabama","Catherine Cortez Masto	U.S. Senate Nevada","Jacky Rosen	U.S. Senate Nevada","Tom Udall	U.S. Senate New Mexico","Martin Heinrich	U.S. Senate New Mexico","Lamar Alexander	U.S. Senate Tennessee","Marsha Blackburn	U.S. Senate Tennessee","John Hoeven	U.S. Senate North Dakota","Kevin Cramer	U.S. Senate North Dakota","Richard Burr	U.S. Senate North Carolina","Thom Tillis	U.S. Senate North Carolina","Bill Cassidy	U.S. Senate Louisiana","John Neely Kennedy	U.S. Senate Louisiana","Maggie Hassan	U.S. Senate New Hampshire","Jeanne Shaheen	U.S. Senate New Hampshire","Susan Collins	U.S. Senate Maine","Angus King	U.S. Senate Maine","Rick Scott	U.S. Senate Florida","Marco Rubio	U.S. Senate Florida","John Thune	U.S. Senate South Dakota","Mike Rounds	U.S. Senate South Dakota","Sheldon Whitehouse	U.S. Senate Rhode Island","Jack Reed	U.S. Senate Rhode Island","Bob Menendez	U.S. Senate New Jersey","Cory Booker	U.S. Senate New Jersey","Lindsey Graham	U.S. Senate South Carolina","Tim Scott	U.S. Senate South Carolina","Brian E. Schatz	U.S. Senate Hawaii","Mazie K. Hirono	U.S. Senate Hawaii","Daniel S. Sullivan	U.S. Senate Alaska","Lisa Murkowski	U.S. Senate Alaska","Jim Inhofe	U.S. Senate Oklahoma","James Lankford	U.S. Senate Oklahoma","Ben Sasse	U.S. Senate Nebraska","Deb Fischer	U.S. Senate Nebraska","Christopher S. Murphy	U.S. Senate Connecticut","Richard Blumenthal	U.S. Senate Connecticut","Roger Wicker	U.S. Senate Mississippi","Cindy Hyde-Smith	U.S. Senate Mississippi","Roy Blunt	U.S. Senate Missouri","Josh Hawley	U.S. Senate Missouri","Pat Toomey	U.S. Senate Pennsylvania","Bob Casey Jr.	U.S. Senate Pennsylvania","Mike Lee	U.S. Senate Utah","Mitt Romney	U.S. Senate Utah"];
    const { value } = e.target;

    let data = [];
    if (value!= '' && value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      data = items.sort().filter((v) => regex.test(v));
    }
    this.setState(() => ({ data, text: value, collapse: true }));
  }

  clickedItem = (item) => {
    this.setState({text: item, collapse: false})
    if(this.props.changePerson1 != null ){
      this.props.changePerson1(item)
    }
    if(this.props.changePerson2 !=null) {
      this.props.changePerson2(item)
    }
  }

  renderData = () => {
    const { data } = this.state;
    console.log(data)
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
    console.log(this.state.data)
    return (
      <div class="publicfigurerequestBoxtext">
        <div class="searchrow">
          <img width="27px" height="30px" className="personImage" src={require("./profilesearch.png")} />
            <div class="form"><input className="form"
            value={this.state.text} onChange={this.onTextChanged}
            type="text" name="name" autocomplete="off" required />
              <label for="name" class= "label-name">
                <span class="content-name">Public Figure</span>
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

export default RequestButtons;
