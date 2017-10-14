import React from 'react';
import { remote, ipcRenderer } from 'electron';

import NoRepoDialog from '../dialogs/no-repos';
import * as eventTypes from '../../event/types';

class NoRepos extends React.Component {
  constructor() {
    super();

    this.openFileDialog = this.openFileDialog.bind(this);    
  }

  openFileDialog() {
    const dialog = remote.dialog;
    const dialogResult = dialog.showOpenDialog({
      title: 'Git Repo Location',
      properties: [
        'openDirectory'
      ]
    });

    if (dialogResult) {
      ipcRenderer.send(eventTypes.IS_REPO_VALID, dialogResult);

      ipcRenderer.on(eventTypes.IS_REPO_VALID_REPLY, (event, valid) => {
        if (valid) {
          this.props.history.push({
            pathname: '/add-repo',
            search: `?dir=${encodeURIComponent(dialogResult)}`
          });
        }
      });
    }
  }

  render() {
    return(<NoRepoDialog dialogRefuse={this.closeApp} dialogAccept={this.openFileDialog} />);
  }
};

export default NoRepos;
