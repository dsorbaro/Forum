import { ActionTypes } from '../actions';

export default function (state = { authenticated: false, admin: false, requestedDebatesForUser: null, rejectedDebatesForUser: null, activeDebatesForUser: null, completedDebatesForUser:null }, action) {
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
        ...state, authenticated: false,  email: '', fields: {}, admin: false, requestedDebatesForUser: null, rejectedDebatesForUser: null, activeDebatesForUser: null, completedDebatesForUser:null
      };
    case ActionTypes.AUTH_ERROR:
      return {
        ...state, authenticated: false, email: '', fields: {}, admin: false, requestedDebatesForUser: null, rejectedDebatesForUser: null, activeDebatesForUser: null, completedDebatesForUser:null
      };
    case ActionTypes.USERS_REQUESTED_DEBATES:
      return {
        ...state, requestedDebatesForUser: action.payload,
      };
    case ActionTypes.USERS_REJECTED_DEBATES:
        return {
          ...state,
          rejectedDebatesForUser: action.payload,
    };
    case ActionTypes.USERS_ACTIVE_DEBATES:
        return {
          ...state,
          activeDebatesForUser: action.payload,
    };
    case ActionTypes.USERS_COMPLETED_DEBATES:
        return {
          ...state,
          completedDebatesForUser: action.payload,
    };
    default:
      return state;
  }

}
