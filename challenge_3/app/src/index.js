import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import store from './store/store';
import BoardContainer from './containers/boardContainer';
import registerServiceWorker from './registerServiceWorker';
console.log(store);

ReactDOM.render(
  <Provider store={store}>
    <BoardContainer />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
