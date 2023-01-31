import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store'
import { PersistGate } from 'redux-persist/integration/react';
import {PersistS}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider  store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
