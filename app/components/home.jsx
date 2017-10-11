import React from 'react';
import { connect } from 'react-redux';
import { remote } from 'electron';

import NoGitDialog from './dialogs/no-git';
import * as config from '../config';

class Home extends React.Component {
  openGitDownload() {
    window.open(config.GIT_CLI_URL, '_blank	');
  };

  closeApp() {
    remote.getCurrentWindow().close();
  };

  get noGitDialog() {
    return !this.props.git.exists ? <NoGitDialog dialogRefuse={this.closeApp} dialogAccept={() => { console.log('#fff'); }} /> : null;
  }

  render() {
    return (
      <div className='home'>
        { this.noGitDialog }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    git: state.git
  }
};

const ReduxHome = connect(mapStateToProps)(Home);

export default ReduxHome;
