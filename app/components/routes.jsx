import React from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/home';
import AddRepo from './pages/add-repo';
import NoGit from './pages/no-git';
import NoRepos from './pages/no-repos';

export default (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/add-repo" component={AddRepo} />
    <Route path="/no-git" component={NoGit} />
    <Route path="/no-repos" component={NoRepos} />
  </div>
);
