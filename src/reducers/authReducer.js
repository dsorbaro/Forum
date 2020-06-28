import { ActionTypes } from '../actions';

export default function (state = { authenticated: false, admin: false, requestedDebatesForUser: null }, action) {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      if(action.email === "msorbaro@gmail.com" || action.email === "davidjsorbaro@gmail.com"){
        return {
          ...state, authenticated: true, email: action.email, fields: action.fields, admin: true
        };
      }
      return {
        ...state, authenticated: true, email: action.email, fields: action.fields, admin: false
      };
    case ActionTypes.DEAUTH_USER:
      return {
        ...state, authenticated: false,  email: '', fields: {}, admin: false,
      };
    case ActionTypes.AUTH_ERROR:
      return {
        ...state, authenticated: false, email: '', fields: {}, admin: false
      };
    case ActionTypes.USERS_REQUESTED_DEBATES:
      return {
        ...state, requestedDebatesForUser: action.payload,
      };
    default:
      return state;
  }
}
