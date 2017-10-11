const { COMMAND_EXISTS } = require('./types');

const initalState = {
  exists: false
};

module.exports = function(state = initalState, action) {
  switch(action.type) {
    case COMMAND_EXISTS:
      return Object.assign({}, state, {
        exists: action.value
      })
    default:
      return state;
  }
}