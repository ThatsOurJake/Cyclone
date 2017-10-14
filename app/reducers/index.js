import { combineReducers } from 'redux';
import { routerMiddleware } from 'react-router-redux';

import gitReducer from './git-reducer';
import repoReducer from './repo-reducer';

export default combineReducers({
  git: gitReducer,
  repos: repoReducer,
  router: routerMiddleware
});
