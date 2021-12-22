import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: 'https://app-qmpl7qfdbthr.frontegg.com',
};

ReactDOM.render(
  <FronteggProvider contextOptions={contextOptions}>
    <App />
  </FronteggProvider>,
  document.getElementById('root')
);