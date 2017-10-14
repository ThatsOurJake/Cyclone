import simpleGit from 'simple-git';
import fs from 'fs';

export const validRepo = (path) => {
  if (fs.existsSync(`${path}\\.git`)) {
    return true;
  }

  return false;
};
