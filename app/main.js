const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
const commandExistsSync = require('command-exists').sync;
const { createStore } = require('redux');
const { default: installExtension, REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } = require('electron-devtools-installer');

const reducers = require('./reducers');
const { gitCommandDoesntExist, gitCommandExists} = require('./actions/git-actions');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1100,
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

  win.__INITAL_STATE__ = store.getState();

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

