import axios from 'axios';

export const ActionTypes = {
  FETCH_REQUESTS: 'FETCH_REQUESTS',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
  ERROR_SET: 'ERROR_SET',
  ERROR_CLEAR: 'ERROR_CLEAR',
  FETCH_PENDING_DEBATORS: 'FETCH_PENDING_DEBATORS',
  FETCH_APPROVED_DEBATORS: 'FETCH_APPROVED_DEBATORS',
  CREATE_POST: 'CREATE_POST',
  FETCH_POPULAR_REQUESTS: 'FETCH_POPULAR_REQUESTS',
  USERS_REQUESTED_DEBATES: 'USERS_REQUESTED_DEBATES',
  USERS_REJECTED_DEBATES: 'USERS_REJECTED_DEBATES',
  USERS_ACTIVE_DEBATES: 'USERS_ACTIVE_DEBATES',
  ONE_DEBATE: 'ONE_DEBATE',
};

const ROOT_URL = 'https://forum-debate.herokuapp.com/api';

//const ROOT_URL = 'http://localhost:9090/api';

const ERROR_TIMEOUT = 5000;


export function clearError() {
  return {
    type: ActionTypes.ERROR_CLEAR,
  };
}

export function newError(message) {
  return (dispatch) => {
    setTimeout(() => { dispatch(clearError()); }, ERROR_TIMEOUT);
    dispatch({
      type: ActionTypes.ERROR_SET,
      message,
    });
  };
}

export function authError(message) {
  return (dispatch) => {
    setTimeout(() => { dispatch(clearError()); }, ERROR_TIMEOUT);
    dispatch({
      type: ActionTypes.AUTH_ERROR,
      message,
    });
  };
}

export function fetchRequests() {
  // ActionCreator returns a function
  // that gets called with dispatch
  return (dispatch) => {
    axios.get(`${ROOT_URL}/requests`)
      .then((response) => {
        console.log(response)
        dispatch({ type: ActionTypes.FETCH_REQUESTS, payload: response.data });
      })
      .catch((error) => {
        dispatch(`failed to fetch posts: ${error}`);
      });
  };
}

export function fetchPopularRequests() {
  // ActionCreator returns a function
  // that gets called with dispatch
  return (dispatch) => {
    axios.get(`${ROOT_URL}/requestsByVotes`)
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_POPULAR_REQUESTS, payload: response.data });
      })
      .catch((error) => {
        dispatch(`failed to fetch posts: ${error}`);
      });
  };
}

export function createRequest(props) {
  //console.log(props)
  return (dispatch) => {
    axios.post(`${ROOT_URL}/requests`, props )
      .then((response) => {
        axios.get(`${ROOT_URL}/requestsByVotes`)
          .then((res) => {
            dispatch({ type: ActionTypes.FETCH_POPULAR_REQUESTS, payload: res.data });
          })
          .catch((error) => {
            dispatch(`failed to fetch posts: ${error}`);
          });
      })
      .catch((error) => {
        dispatch(`failed to create post: ${error}`);
      });
  };
}

export function signinUser(fields, history) {
  // console.log("made it into sign in")
  // console.log("fields below")
  // console.log(fields)
  return (dispatch) => {
    // console.log("pre axious")
    axios.post(`${ROOT_URL}/signin`, fields)
      .then((response) => {
        // console.log(
        //   "made it to dispatch"
        // )
        dispatch({ type: ActionTypes.AUTH_USER,  email: response.data.email });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('email', response.data.email);
        history.push('/');
      })
      .catch((error) => {
        dispatch(authError(`Sign In Failed: ${error}`));
      });
  };
}


export function signupUser(fields, history) {
//  console.log("in signup user")
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signup`, fields)
      .then((response) => {
      //  console.log("Made it to dispatch")
        dispatch({ type: ActionTypes.AUTH_USER, email: response.data.email, fields: fields});
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('email', response.data.email);
        history.push('/');
      })
      .catch((error) => {
        dispatch(authError(`Sign Up Failed: ${error}`));
      });
  };
}


export function signoutUser(history) {
  return (dispatch) => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    dispatch({ type: ActionTypes.DEAUTH_USER });
    history.push('/');
  };
}

export function getPendingDebators() {
  //console.log("getting pending debators in index js")
  return (dispatch) => {
    axios.get(`${ROOT_URL}/getPending`)
      .then((response) => {
        //console.log(response)
      //  console.log("made it into then statement")
        dispatch({ type: ActionTypes.FETCH_PENDING_DEBATORS, payload: response.data });
      })
      .catch((error) => {
        dispatch(`failed to fetch posts: ${error}`);
      });
  };
}

export function getApprovedDebators() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/getApproved`)
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_APPROVED_DEBATORS, payload: response.data });
      })
      .catch((error) => {
        dispatch(`failed to fetch posts: ${error}`);
      });
  };
}

export function getUserFromEmail(email) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/getUser`, email)
      .then((response) => {
        dispatch({ type: ActionTypes.AUTH_USER, email: response.data[0].email, fields: response.data[0]});
      })
      .catch((error) => {
        dispatch(`failed to fetch posts: ${error}`);
      });
  };
}

export function changeUserStatus(id, status) {
    var statusField = {
      status
    }
    return (dispatch) => {

      //console.log("ehreeeee in change status")
      axios.put(`${ROOT_URL}/getPending/${id}`, statusField).then((response) => {
        axios.get(`${ROOT_URL}/getPending`)
          .then((response) => {
            // console.log(response)
            // console.log("made it into then statement")
            dispatch({ type: ActionTypes.FETCH_PENDING_DEBATORS, payload: response.data });
          })
          .catch((error) => {
            dispatch(`failed to fetch posts: ${error}`);
          });
        //dispatch({ type: ActionTypes.FETCH_PENDING_DEBATORS, payload: response.data });
      })
        .catch(((error) => {
        //  dispatch({ type: 'ERROR', payload: { error: error.message } });
        //console.log("error")
        }));
    }
}

export function voteRequest(id, fields) {
    return (dispatch) => {
      axios.put(`${ROOT_URL}/requests/${id}`, fields).then((response) => {
        axios.get(`${ROOT_URL}/requestsByVotes`)
          .then((response) => {
            dispatch({ type: ActionTypes.FETCH_POPULAR_REQUESTS, payload: response.data });
          })
          .catch((error) => {
            dispatch(`failed to fetch posts: ${error}`);
          });
      })
        .catch(((error) => {

        }));
    }
}

export function editDebateStatus(id, fields) {
    return (dispatch) => {
      console.log("hereee")
      axios.put(`${ROOT_URL}/editDebateStatus/${id}`, fields).then((response) => {
        axios.post(`${ROOT_URL}/userDebates`, fields)
          .then((response) => {
            dispatch({ type: ActionTypes.USERS_REQUESTED_DEBATES, payload: response.data});
          })
          .catch((error) => {
            dispatch(`failed to create post: ${error}`);
          });
      })
        .catch(((error) => {

        }));
    }
}


// export function getUsersRequestedDebates(email) {
//   return (dispatch) => {
//     axios.post(`${ROOT_URL}/getUserRequests`, email)
//       .then((response) => {
//         dispatch({ type: ActionTypes.USERS_REQUESTED_DEBATES, payload: response.data});
//       })
//       .catch((error) => {
//         dispatch(`failed to fetch posts: ${error}`);
//       });
//   };
// }

// export function createDebate(){
//   var fields = {
//   	requestID: "5ef8e027f8d0cc095f34a01c",
//   	person1ID: "5ef8d80f482b4a05aea9acc0",
//   	person2ID: "5ef8df7b482b4a05aea9acc1"
//   }
//   return (dispatch) => {
//     axios.post(`${ROOT_URL}/debates`, fields )
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         dispatch(`failed to create post: ${error}`);
//       });
//   };
// }

export function getAllDebates(){
  return (dispatch) => {
    axios.get(`${ROOT_URL}/debates`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        dispatch(`failed to create post: ${error}`);
      });
  };
}

export function getPendingDebatesForUser(email){
  return (dispatch) => {
    axios.post(`${ROOT_URL}/userDebates`,email)
      .then((response) => {
        console.log(response);
        console.log("my pendng debates ^")
        dispatch({ type: ActionTypes.USERS_REQUESTED_DEBATES, payload: response.data});
      })
      .catch((error) => {
        dispatch(`failed to create post: ${error}`);
      });
  };
}

export function getRejectedDebatesForUser(email){
  return (dispatch) => {
    axios.post(`${ROOT_URL}/userRejectedDebates`,email)
      .then((response) => {
        dispatch({ type: ActionTypes.USERS_REJECTED_DEBATES, payload: response.data});
      })
      .catch((error) => {
        dispatch(`failed to create post: ${error}`);
      });
  };
}

export function getActiveDebatesForUser(email){
  return (dispatch) => {
    axios.post(`${ROOT_URL}/userActiveDebates`,email)
      .then((response) => {
        console.log(response);
        dispatch({ type: ActionTypes.USERS_ACTIVE_DEBATES, payload: response.data});
      })
      .catch((error) => {
        dispatch(`failed to create post: ${error}`);
      });
  };
}


export function getOneDebate(id){
  console.log("In axios");
  console.log(id)
  return (dispatch) => {
    axios.get(`${ROOT_URL}/oneDebate/${id}`)
      .then((response) => {
        dispatch({ type: ActionTypes.ONE_DEBATE, payload: response.data});
      })
      .catch((error) => {
        dispatch(`failed to create post: ${error}`);
      });
  };
}


export function goToNextDebate(id, fields, history) {
    return (dispatch) => {
      axios.put(`${ROOT_URL}/oneDebate/${id}`, fields).then((response) => {
          console.log("axiosed in next debate!")
          console.log(response)
          dispatch({ type: ActionTypes.ONE_DEBATE, payload: response.data });
          history.push("/profile");
      })
        .catch(((error) => {
          dispatch(`failed to create post: ${error}`);
        }));
    }
}
