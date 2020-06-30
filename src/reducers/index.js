import { combineReducers } from 'redux';
import RequestReducer from './requestReducer';
import AuthReducer from './authReducer';
import ErrorReducer from './errorReducer';
import PendingDebatorsReducer from './pendingDebatorsReducer';
import ApprovedDebatorsReducer from './approvedDebatorsReducer';
import DebateReducer from './debateReducer';

const rootReducer = combineReducers({
  requests: RequestReducer,
  error: ErrorReducer,
  auth: AuthReducer,
  pendingDebators: PendingDebatorsReducer,
  approvedDebators: ApprovedDebatorsReducer,
  debate: DebateReducer,
});

export default rootReducer;
