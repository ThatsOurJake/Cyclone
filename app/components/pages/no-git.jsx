import React from 'react';
import { remote } from 'electron';

import NoGitDialog from '../dialogs/no-git';
import * as config from '../../config';

class NoGit extends React.Component {
  closeApp() {
    remote.getCurrentWindow().close();
  };

  openGitDownload() {
    window.open(config.GIT_CLI_URL, '_blank	');
  };

  render() {
    return (
      <NoGitDialog dialogRefuse={this.closeApp} dialogAccept={this.openGitDownload} />
    );
  }
};

export default NoGit;
