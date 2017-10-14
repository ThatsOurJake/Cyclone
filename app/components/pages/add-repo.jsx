import React from 'react';
import { ipcRenderer } from 'electron';

import AddRepoDialog from '../dialogs/add-repo';
import * as eventTypes from '../../event/types';

class AddRepo extends React.Component {
  constructor(props) {
    super();

    const { location } = props;
    const search = decodeURIComponent(location.search).replace('?', '');

    const directory = search.split('=')[1];
    const directorySplit = directory.split('\\');
    const placeholderName = directorySplit[directorySplit.length - 1].toLowerCase().replace(/ /g, '-');

    this.state = {
      directory,
      bookmark: placeholderName
    };

    this.backToHome = this.backToHome.bind(this);
    this.addRepo = this.addRepo.bind(this);
  }

  backToHome() {
    this.props.history.push('/');
  }

  addRepo(state) {    
    ipcRenderer.send(eventTypes.ADD_REPO, state);

    ipcRenderer.on(eventTypes.ADD_REPO_REPLY, (event, payload) => {
      if (payload.success) {
        this.backToHome();
      }
    });
  }

  render() {
    return(
      <div>
        <AddRepoDialog
          repoLocation={this.state.directory}
          bookmark={this.state.bookmark}
          dialogAccept={this.addRepo}
          dialogRefuse={this.backToHome}
        />
      </div>
    );
  }
};

export default AddRepo;
