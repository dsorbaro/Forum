import { combineReducers } from 'redux';
import RequestReducer from './requestReducer';

const rootReducer = combineReducers({
  requests: RequestReducer,
});

export default rootReducer;
