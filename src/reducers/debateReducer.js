import { ActionTypes } from '../actions/index';

const initialState = {
  oneDebate: null, all: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ONE_DEBATE:
      return {
        ...state,
        oneDebate: action.payload,
      };
      case ActionTypes.ALL_DEBATES:
        return {
          ...state,
          all: action.payload,
        };
    default:
      return state;
  }
}
