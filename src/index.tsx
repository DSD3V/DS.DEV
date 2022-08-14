import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';

import './index.css';
import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <title>DS.DEV</title>
      <meta content="DS.DEV" name="description" />
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
