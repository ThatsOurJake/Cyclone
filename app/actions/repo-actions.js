import { REQUEST_REPOS_ERROR, REQUEST_REPOS_SUCCESS } from '../reducers/types';

export const loadRepos = (repos) => {
  return {
    type: REQUEST_REPOS_SUCCESS,
    data: repos
  };
};

export const errorRepos = (error) => {
  return {
    type: REPOS_EXIST,
    error
  };
};
