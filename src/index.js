import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'normalize.css';
import './assets/css/base.less';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <Provider store={store}>
        <HashRouter>
          <App/>
        </HashRouter>
      </Provider>
    </Suspense>
  </React.StrictMode>
);