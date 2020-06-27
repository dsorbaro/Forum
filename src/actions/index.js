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
};

const ROOT_URL = 'https://forum-debate.herokuapp.com/api';

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
      //  console.log(`created: ${response}`);
         dispatch({ type: ActionTypes.CREATE_POST, payload: response.data });
      //  history.push('/');
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
        axios.get(`${ROOT_URL}/requests`)
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
