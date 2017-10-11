const { combineReducers } = require('redux');

const gitReducer = require('./git-reducer');

const reducers = combineReducers({
  git: gitReducer
});

module.exports = reducers;