import { combineReducers } from 'redux';
import RequestReducer from './requestReducer';
import AuthReducer from './authReducer';
import ErrorReducer from './errorReducer';

const rootReducer = combineReducers({
  requests: RequestReducer,
  error: ErrorReducer,
  auth: AuthReducer,

});

export default rootReducer;
