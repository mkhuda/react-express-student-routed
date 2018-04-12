import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

import Routes from './router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
registerServiceWorker();
