import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import 'typeface-roboto';
import './styles/app.scss';

import App from './components/app';

const renderApp = () => {
  return render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
  );
}

renderApp();

if (module.hot) {
  module.hot.accept('./components/app', () => {
    renderApp();
  });
}
