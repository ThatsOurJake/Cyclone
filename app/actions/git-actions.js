import { COMMAND_EXISTS } from '../reducers/types';

export const gitCommandExists = () => {
  return {
    type: COMMAND_EXISTS,
    value: true
  };
};

export const gitCommandDoesntExist = () => {
  return {
    type: COMMAND_EXISTS,
    value: false
  };
};
