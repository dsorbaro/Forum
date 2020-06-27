import { ActionTypes } from '../actions';

export default function (state = { authenticated: false }, action) {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return {
        ...state, authenticated: true, email: action.email, fields: action.fields,
      };
    case ActionTypes.DEAUTH_USER:
      return {
        ...state, authenticated: false,  email: '', fields: {},
      };
    case ActionTypes.AUTH_ERROR:
      return {
        ...state, authenticated: false, email: '', fields: {},
      };
    default:
      return state;
  }
}
