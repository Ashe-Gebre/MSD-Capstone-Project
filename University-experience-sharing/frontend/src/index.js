import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import reducers from "./reducers";
import logger from "redux-logger";
import thunk from 'redux-thunk';
import './index.css';
import Amplify from 'aws-amplify';
import config from './aws-exports'


Amplify.configure(config)

const middlewares = [logger, thunk];

const store = createStore(reducers, compose(applyMiddleware(...middlewares)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
