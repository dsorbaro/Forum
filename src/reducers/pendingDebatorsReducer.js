import { ActionTypes } from '../actions/index';

const initialState = {
  all: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_PENDING_DEBATORS:
      return {
        ...state,
        all: action.payload,
      };
    default:
      return state;
  }
}
