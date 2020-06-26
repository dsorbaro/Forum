import axios from 'axios';

export const ActionTypes = {
  FETCH_REQUESTS: 'FETCH_REQUESTS',
};

const ROOT_URL = 'https://forum-debate.herokuapp.com/api';




export function fetchRequests(done) {
  // ActionCreator returns a function
  // that gets called with dispatch
  return (dispatch) => {
    axios.get(`${ROOT_URL}/requests`)
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_REQUESTS, payload: response.data });
        if (done) done();
      })
      .catch((error) => {
        dispatch(`failed to fetch posts: ${error}`);
      });
  };
}

export function createRequest(props) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/requests`, props )
      .then((response) => {
        console.log(`created: ${response}`);
        // dispatch({ type: ActionTypes.CREATE_POST, payload: response.data });
      //  history.push('/');
      })
      .catch((error) => {
        dispatch(`failed to create post: ${error}`);
      });
  };
}
