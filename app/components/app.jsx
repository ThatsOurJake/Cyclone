import React from 'react';
import { remote } from 'electron';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Home from './home';
import reducers from '../reducers';

import 'typeface-roboto';

class App extends React.Component {
  get store() {
    const { __INITAL_STATE__ } = remote.getCurrentWindow();
    const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

    return createStore(reducers, __INITAL_STATE__, devTools);
  }

  render() {
    return (
      <div className="cyclone-wrapper">
        <Provider store={this.store}>
          <Home />
        </Provider>
      </div>
    );
  }
}

export default App;
