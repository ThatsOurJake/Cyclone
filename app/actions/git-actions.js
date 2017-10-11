const { COMMAND_EXISTS } = require('../reducers/types');

function gitCommandExists() {
  return {
    type: COMMAND_EXISTS,
    value: true
  };
};

function gitCommandDoesntExist() {
  return {
    type: COMMAND_EXISTS,
    value: false
  };
};

module.exports = {
  gitCommandDoesntExist,
  gitCommandExists
}
