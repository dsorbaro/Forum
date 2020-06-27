import { combineReducers } from 'redux';
import RequestReducer from './requestReducer';
import AuthReducer from './authReducer';
import ErrorReducer from './errorReducer';
import PendingDebatorsReducer from './pendingDebatorsReducer';

const rootReducer = combineReducers({
  requests: RequestReducer,
  error: ErrorReducer,
  auth: AuthReducer,
  pendingDebators: PendingDebatorsReducer,

});

export default rootReducer;
