import { ActionTypes } from '../actions/index';

const initialState = {
  oneDebate: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ONE_DEBATE:
      return {
        ...state,
        oneDebate: action.payload,
      };
    default:
      return state;
  }
}
