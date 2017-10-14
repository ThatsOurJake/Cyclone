import { REQUEST_REPOS_SUCCESS, REQUEST_REPOS_ERROR } from './types';

const initalState = {
  repos: [],
  error: ''
};

export default (state = initalState, action) => {
  switch(action.type) {
    case REQUEST_REPOS_SUCCESS: {
      const data = action.data;

      return Object.assign({}, state, {
        repos: data
      });
    }
    case REQUEST_REPOS_ERROR:
      return Object.assign({}, state, {
        error: action.error
      });
    default:
      return state;
  }
}