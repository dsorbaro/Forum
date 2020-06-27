
import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signoutUser } from './actions';
import FindyourNewsroomSearch from "./FindyourNewsroomSearch";
import logo from "./forumCircle.png";



const Nav = (props) => {
  //console.log(props.admin)
  var adminLink = props.admin ? (
    <NavLink to="/approveDebators" style={{marginTop: '30px'}}>
      <button class = "signupbutton"> Approve Debators</button>
    </NavLink>
  ) : null;
  var loggedIn = props.authenticated ? (
    <NavLink to="/signIn">
      <button class = "signupbuttonmain" onClick={()=>{ props.signoutUser(props.history) }}>Sign Out</button>
    </NavLink>
  ) :
  (
    <div>
      <NavLink to="/signIn">
        <button class = "signinbutton">Sign In</button>
      </NavLink>

      <NavLink to="/signUp">
        <button class = "signupbuttonmain">Sign Up</button>
      </NavLink>
    </div>
  )
  return (
  <div>
      <div>
            <div class="row">
                        <img class="mainForumlogo" src={logo} />
                        <div class="forumaboveLine">
                                <div class="mainForumtext"><h1>FORUM</h1></div>
                                <div class="logoline"></div>
                        </div>
            </div>
      </div>
      <div class= "navbarRow">

              <NavLink to="/about">
                    <button class = "aboutnavbarbutton">About</button>
              </NavLink>

              <NavLink to="/contact">
                <button class = "navbarbutton">Contact</button>
              </NavLink>
              <div class ="newsroomsearchbar">
            <FindyourNewsroomSearch
            />
            </div>
            {loggedIn}
            </div>
            {adminLink}

    </div>
  );
};

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated, admin: state.auth.admin };
}

export default withRouter(connect(mapStateToProps, {  signoutUser })(Nav));
