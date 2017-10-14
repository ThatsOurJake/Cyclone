import { ipcMain } from 'electron';

import eventTypes from './event/types';
import gitUtils from './utils/git';
import DB from './data';

export default () => {
  ipcMain.on(eventTypes.IS_REPO_VALID, (event, args) => {
    const result = gitUtils.validRepo(args[0]);
    event.sender.send(eventTypes.IS_REPO_VALID_REPLY, result);
  });

  ipcMain.on(eventTypes.ADD_REPO, (event, repo) => {
    DB.repos.insert(repo, (err) => {
      if (err) {
        // TODO: WORK OUT A SOLUTION TO ERRORING
        console.error(err);
        return;
      }
      
      event.sender.send(eventTypes.ADD_REPO_REPLY, {
        success: true
      });
    });
  });
};
