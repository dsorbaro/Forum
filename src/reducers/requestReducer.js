import { ActionTypes } from '../actions/index';

const initialState = {
  all: [], mostPopular: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_REQUESTS:
      return {
        ...state,
        all: action.payload,
      };
      case ActionTypes.FETCH_POPULAR_REQUESTS:
        return {
          ...state,
          mostPopular: action.payload,
        };
    default:
      return state;
  }
}
