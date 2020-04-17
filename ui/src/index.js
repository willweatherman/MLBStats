import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app.js';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './store.js'
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <Provider store={store}>
          <BrowserRouter>
            <App/>
          </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
