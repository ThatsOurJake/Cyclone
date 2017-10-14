import { COMMAND_EXISTS } from './types';

const initalState = {
  exists: false
};

export default (state = initalState, action) => {
  switch(action.type) {
    case COMMAND_EXISTS:
      return Object.assign({}, state, {
        exists: action.value
      });
    default:
      return state;
  }
}