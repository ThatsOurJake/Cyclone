import path from 'path';
import { app, BrowserWindow } from 'electron';
import url from 'url';
import commandExistsSync from 'command-exists';
import { createStore } from 'redux';
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer';

import reducers from './reducers';
import { gitCommandDoesntExist, gitCommandExists } from './actions/git-actions';
import { loadRepos, errorRepos } from './actions/repo-actions';
import DB from './data';
import * as dbUtils from './data/utils';
import setupEvents from './events';

let win;

const createWindow = async () => {
  win = new BrowserWindow({
    minWidth: 640,
    width: 1100,
    minHeight: 480,
    height: 680,
    title: "Cyclone"
  });

  if (process.env.NODE_ENV === 'development') {
    const downloads = Promise.all([
      installExtension(REACT_DEVELOPER_TOOLS),
      installExtension(REDUX_DEVTOOLS)      
    ]);
  }

  const store = createStore(reducers);

  if (commandExistsSync('git')) {
    store.dispatch(gitCommandExists());
  } else {
    store.dispatch(gitCommandDoesntExist());
  }

  const repos = await dbUtils.findRepoDB({})
    .catch(err => store.dispatch(errorRepos(err)));
  store.dispatch(loadRepos(repos));

  win.__INITAL_STATE__ = store.getState();

  setupEvents();

  win.loadURL('http://localhost:3000/');

  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

