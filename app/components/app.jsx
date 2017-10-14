import React from 'react';
import { remote } from 'electron';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

import reducers from '../reducers';
import routes from './routes'

class App extends React.Component {
  get history() {
    return createHistory();    
  }

  get store() {
    const { __INITAL_STATE__ } = remote.getCurrentWindow();
    const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
    const middleware = routerMiddleware(this.history);

    return createStore(reducers, __INITAL_STATE__, compose(
      applyMiddleware(middleware),
      devTools
    ));
  }

  render() {
    return (
      <div className="cyclone-wrapper">
        <Provider store={this.store}>
          <ConnectedRouter history={this.history}>
            {routes}
          </ConnectedRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
