import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from 'store/auth/reducers';
import user from 'store/user/reducers';

export default history =>
  combineReducers({
    router: connectRouter(history),
    auth,
    user,
  });
